package com.app.trycatch.repository.skilllog;

import com.app.trycatch.dto.skilllog.SkillLogAsideDTO;
import com.app.trycatch.dto.skilllog.SkillLogDTO;
import com.app.trycatch.mapper.skilllog.SkillLogMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class SkillLogDAO {
    private final SkillLogMapper skillLogMapper;

//    추가
    public void save(SkillLogDTO skillLogDTO) {
        skillLogMapper.insert(skillLogDTO);
    }

//    aside
    public SkillLogAsideDTO findProfileByMemberId(Long id) {
        return skillLogMapper.selectProfileByMemberId(id);
    }
}
