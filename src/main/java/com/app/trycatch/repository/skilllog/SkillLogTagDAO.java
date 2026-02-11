package com.app.trycatch.repository.skilllog;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class SkillLogTagDAO {
    private final SkillLogTagMapper skillLogTagMapper;

    public void save(SkillLogTagVO skillLogTagVO) {
        skillLogTagMapper.insert(skillLogTagVO);
    }
}
