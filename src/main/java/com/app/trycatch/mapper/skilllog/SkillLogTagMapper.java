package com.app.trycatch.mapper.skilllog;

import com.app.trycatch.domain.skilllog.SkillLogTagVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SkillLogTagMapper {
    public void insert(SkillLogTagVO skillLogTagVO);
}
