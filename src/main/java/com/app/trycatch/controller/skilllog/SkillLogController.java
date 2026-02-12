package com.app.trycatch.controller.skilllog;

import com.app.trycatch.dto.skilllog.SkillLogDTO;
import com.app.trycatch.service.skilllog.SkillLogService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;

@Controller
@RequestMapping("/skill-log/**")
@RequiredArgsConstructor
@Slf4j
public class SkillLogController {
    private final SkillLogService skillLogService;

    @GetMapping("write")
    public String goToWrite(SkillLogDTO skillLogDTO){
        return "skill-log/write";
    }

    @PostMapping("write")
    public RedirectView write(SkillLogDTO skillLogDTO,
                      @RequestParam("file") ArrayList<MultipartFile> multipartFiles ) {
        skillLogDTO.setMemberId(2L);
        skillLogService.write(skillLogDTO, multipartFiles);
        return new RedirectView("/skill-log/list");
    }

    @GetMapping("list")
    public String goToList() {
        return "skill-log/list";
    }
}
