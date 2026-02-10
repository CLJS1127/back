package com.app.trycatch.service.member;

import com.app.trycatch.domain.member.AddressVO;
import com.app.trycatch.domain.member.MemberVO;
import com.app.trycatch.dto.member.CorpMemberDTO;
import com.app.trycatch.repository.member.AddressDAO;
import com.app.trycatch.repository.member.CorpMemberDAO;
import com.app.trycatch.repository.member.MemberDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class CorpService {
    private final MemberDAO memberDAO;
    private final CorpMemberDAO corpMemberDAO;
    private final AddressDAO addressDAO;

    // 아이디 중복 검사 (true: 사용 가능)
    public boolean checkMemberId(String memberId) {
        return memberDAO.findByMemberId(memberId).isEmpty();
    }

    // 이메일 중복 검사 (true: 사용 가능)
    public boolean checkEmail(String memberEmail) {
        return memberDAO.findByMemberEmail(memberEmail).isEmpty();
    }

    // 회사명 중복 검사 (true: 사용 가능)
//    public boolean checkCompanyAddress(String corpCompanyName){
//        return
//    }


    //  기업 회원가입
    public void joinCorp(CorpMemberDTO corpMemberDTO) {

        MemberVO memberVO = corpMemberDTO.toMemberVO();
        memberDAO.saveCorp(memberVO);

        corpMemberDTO.setId(memberVO.getId());

        corpMemberDAO.save(corpMemberDTO.toCorpVO());

        AddressVO addressVO = corpMemberDTO.toAddressVO();
        addressDAO.save(addressVO);
    }
}
