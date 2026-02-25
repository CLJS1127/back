package com.app.trycatch.scheduler;

import com.app.trycatch.dto.experience.ExperienceProgramDTO;
import com.app.trycatch.mapper.experience.ExperienceProgramMapper;
import com.app.trycatch.service.Alarm.CorporateAlramService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DeadlineNotificationScheduler {
    private final ExperienceProgramMapper experienceProgramMapper;
    private final CorporateAlramService corporateAlramService;

    @Scheduled(cron = "0 0 9 * * *")
    public void notifyDeadlineToday() {
        String today = LocalDate.now().toString();
        List<ExperienceProgramDTO> programs = experienceProgramMapper.selectByDeadline(today);
        for (ExperienceProgramDTO p : programs) {
            corporateAlramService.notify(
                    p.getCorpId(),
                    "experience_apply_received",
                    "공고 마감일 안내",
                    "[" + p.getExperienceProgramTitle() + "] 프로그램이 오늘 마감됩니다."
            );
        }
    }
}
