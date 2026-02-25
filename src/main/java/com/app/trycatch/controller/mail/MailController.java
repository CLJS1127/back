package com.app.trycatch.controller.mail;

import com.app.trycatch.service.corporate.CorporateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Slf4j
@Controller
@RequestMapping("/mail")
@RequiredArgsConstructor
public class MailController {

    private final CorporateService corporateService;

    @GetMapping("/invite/accept")
    public String acceptInvite(@RequestParam String code) {
        try {
            corporateService.acceptInvite(code);
            return "redirect:/mail/invite/success";
        } catch (IllegalArgumentException e) {
            log.warn("초대 수락 실패: code={}, reason={}", code, e.getMessage());
            return "redirect:/mail/invite/fail";
        }
    }

    @GetMapping("/invite/success")
    public String inviteSuccess() {
        return "mail/invite-success";
    }

    @GetMapping("/invite/fail")
    public String inviteFail() {
        return "mail/invite-fail";
    }
}
