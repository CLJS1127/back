package com.app.trycatch.repository.skilllog;

import com.app.trycatch.domain.skilllog.SkillLogFileVO;
import com.app.trycatch.dto.skilllog.SkillLogDTO;
import com.app.trycatch.dto.skilllog.SkillLogFileDTO;
import com.app.trycatch.mapper.skilllog.SkillLogFileMapper;
import com.app.trycatch.mapper.skilllog.SkillLogMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class SkillLogFileDAO {
    private final SkillLogFileMapper skillLogFileMapper;

    public void save(SkillLogFileVO skillLogFileVO) {
        skillLogFileMapper.insert(skillLogFileVO);
    }
}
