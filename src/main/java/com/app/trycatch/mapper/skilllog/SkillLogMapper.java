package com.app.trycatch.mapper.skilllog;

import com.app.trycatch.domain.skilllog.SkillLogVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SkillLogMapper {
    public void insert(SkillLogVO skillLogVO);
}
