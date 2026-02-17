package com.app.trycatch.mapper.skilllog;

import com.app.trycatch.domain.skilllog.SkillLogVO;
import com.app.trycatch.dto.skilllog.SkillLogAsideDTO;
import com.app.trycatch.dto.skilllog.SkillLogDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SkillLogMapper {
//    추가
    public void insert(SkillLogDTO skillLogDTO);
//    aside
    public SkillLogAsideDTO selectProfileByMemberId(Long id);
}
