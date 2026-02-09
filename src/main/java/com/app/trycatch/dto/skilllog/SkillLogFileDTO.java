package com.app.trycatch.dto.skilllog;

import com.app.trycatch.common.enumeration.skillLog.SkillLogFileType;
import com.app.trycatch.domain.skilllog.FileVO;
import com.app.trycatch.domain.skilllog.SkillLogFileVO;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class SkillLogFileDTO {
    private Long id;
    private String fileTargetType;
    private Long fileTargetId;
    private String fileName;
    private String filePath;
    private int fileSize;
    private String createdDatetime;
    private String updatedDatetime;

    private Long skillLogId;
    private SkillLogFileType skillLogFileType;

    public FileVO toFileVO() {
        return FileVO.builder()
                .id(id)
                .fileTargetType(fileTargetType)
                .fileTargetId(fileTargetId)
                .fileName(fileName)
                .filePath(filePath)
                .fileSize(fileSize)
                .createdDatetime(createdDatetime)
                .updatedDatetime(updatedDatetime)
                .build();
    }

    public SkillLogFileVO toSkillLogFileVO() {
        return SkillLogFileVO.builder()
                .id(id)
                .skillLogId(skillLogId)
                .skillLogFileType(skillLogFileType)
                .build();
    }
}
