package com.app.trycatch.interceptor;

import com.app.trycatch.dto.member.IndividualMemberDTO;
import com.app.trycatch.dto.member.MemberDTO;
import com.app.trycatch.service.Alarm.IndividualAlramService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
@RequiredArgsConstructor
public class IndividualAlramInterceptor implements HandlerInterceptor {
    private final IndividualAlramService individualAlramService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Long memberId = getMemberId(request.getSession(false));
        request.setAttribute("qnaAlrams", memberId != null ? individualAlramService.findQnaAlrams(memberId) : null);
        request.setAttribute("applyAlrams", memberId != null ? individualAlramService.findApplyAlrams(memberId) : null);
        return true;
    }


    private Long getMemberId(HttpSession session) {
        if (session == null) return null;
        Object member = session.getAttribute("member");
        if (member instanceof MemberDTO memberDTOdto) return memberDTOdto.getId();
        if (member instanceof IndividualMemberDTO individualMemberDTO) return individualMemberDTO.getId();
        return null;
    }
}
