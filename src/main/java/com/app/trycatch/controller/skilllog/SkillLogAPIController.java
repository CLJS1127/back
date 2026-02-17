package com.app.trycatch.controller.skilllog;

import com.app.trycatch.common.search.Search;
import com.app.trycatch.dto.skilllog.ExperienceProgramWithPagingDTO;
import com.app.trycatch.service.skilllog.SkillLogService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/skill-log/**")
@RequiredArgsConstructor
@Slf4j
public class SkillLogAPIController {
    private final SkillLogService skillLogService;

    @GetMapping("experience-program-logs/{page}")
    public ExperienceProgramWithPagingDTO experienceProgramLogs(@PathVariable int page, Long id, Search search) {
        return skillLogService.recentExperienceLogs(id, page, search);
    }
}
