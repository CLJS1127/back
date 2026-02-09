package com.app.trycatch.mapper.member;

import com.app.trycatch.domain.member.MemberVO;
import com.app.trycatch.domain.member.OAuthVO;
import com.app.trycatch.dto.member.CorpMemberDTO;
import com.app.trycatch.dto.member.IndividualMemberDTO;
import com.app.trycatch.dto.member.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
    //    oauth
    public void insertOauth(OAuthVO oAuthVO);

    //    개인 회원 가입
    public void insertIndividual(MemberVO memberVO);

    //      기업 회원 가입
    public void insertCorp(MemberVO memberVO);
}
