package com.app.trycatch.mapper.member;

import com.app.trycatch.domain.member.IndividualMemberVO;
import com.app.trycatch.dto.member.IndividualMemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface IndividualMemberMapper {
    public void insert(IndividualMemberVO individualMemberVO);
}
