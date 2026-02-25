package com.app.trycatch.controller.point;

import com.app.trycatch.common.exception.UnauthorizedMemberAccessException;
import com.app.trycatch.dto.member.IndividualMemberDTO;
import com.app.trycatch.service.point.PointService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/point")
@RequiredArgsConstructor
public class PointController {
    private final PointService pointService;
    private final HttpSession session;

    @GetMapping("/point")
    public String point(Model model) {
        Long memberId = getSessionMemberId();
        model.addAttribute("pointDetails", pointService.getPointDetails(memberId));
        model.addAttribute("totalPoint", pointService.getTotalPoint(memberId));
        return "point/point";
    }

    private Long getSessionMemberId() {
        Object member = session.getAttribute("member");
        if (member instanceof IndividualMemberDTO individualMemberDTO && individualMemberDTO.getId() != null) {
            return individualMemberDTO.getId();
        }
        throw new UnauthorizedMemberAccessException();
    }
}
