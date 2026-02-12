package com.app.trycatch.service.skilllog;

import com.app.trycatch.common.enumeration.file.FileContentType;
import com.app.trycatch.domain.skilllog.SkillLogVO;
import com.app.trycatch.domain.skilllog.TagVO;
import com.app.trycatch.dto.file.FileDTO;
import com.app.trycatch.dto.skilllog.SkillLogDTO;
import com.app.trycatch.dto.skilllog.SkillLogFileDTO;
import com.app.trycatch.dto.skilllog.TagDTO;
import com.app.trycatch.repository.file.FileDAO;
import com.app.trycatch.repository.skilllog.SkillLogDAO;
import com.app.trycatch.repository.skilllog.SkillLogFileDAO;
import com.app.trycatch.repository.skilllog.TagDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class SkillLogService {
    private final SkillLogDAO skillLogDAO;
    private final TagDAO tagDAO;
    private final SkillLogFileDAO skillLogFileDAO;
    private final FileDAO fileDAO;

    public void write(SkillLogDTO skillLogDTO, List<MultipartFile> multipartFiles) {
        String rootPath = "C:/file/";
        String todayPath = getTodayPath();
        String path = rootPath + todayPath;

        FileDTO fileDTO = new FileDTO();
        SkillLogFileDTO skillLogFileDTO = new SkillLogFileDTO();

        skillLogDAO.save(skillLogDTO);

        skillLogDTO.getTags().forEach((tagDTO) -> {
        tagDTO.setSkillLogId(skillLogDTO.getId());
            tagDAO.save(tagDTO.toVO());
        });

        skillLogFileDTO.setSkillLogId(skillLogDTO.getId());
        multipartFiles.forEach(multipartFile -> {
            if(multipartFile.getOriginalFilename().isEmpty()){
                return;
            }
            UUID uuid = UUID.randomUUID();
            fileDTO.setFilePath(todayPath);
            fileDTO.setFileSize(String.valueOf(multipartFile.getSize()));
            fileDTO.setFileOriginalName(multipartFile.getOriginalFilename());
            fileDTO.setFileName(uuid.toString() + "_" + multipartFile.getOriginalFilename());
            fileDTO.setFileContentType(multipartFile.getContentType().contains("image") ? FileContentType.IMAGE : FileContentType.OTHER);
            fileDAO.save(fileDTO);

            skillLogFileDTO.setId(fileDTO.getId());
            skillLogFileDAO.save(skillLogFileDTO.toSkillLogFileVO());

            File directory = new File(path);
            if(!directory.exists()){
                directory.mkdirs();
            }

            try {
                multipartFile.transferTo(new File(path, fileDTO.getFileName()));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }


    public String getTodayPath(){
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
}
