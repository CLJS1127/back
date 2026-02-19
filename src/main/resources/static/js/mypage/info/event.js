document.addEventListener("DOMContentLoaded", () => {
    const profileBirth = document.getElementById("profileBirth");
    if (!profileBirth) return;

    // 초기화
    const birth = profileBirth.value;
    const gender = document.getElementById("profileGender")?.value;
    const phone = document.getElementById("profilePhone")?.value;
    const education = document.getElementById("profileEducation")?.value;
    infoLayout.initFields(birth, gender, phone, education);

    // 포커스 시 에러 메시지 숨기기
    const helpWraps = document.querySelectorAll(".mbrHelpWrap");
    helpWraps.forEach((wrap) => {
        const inputs = wrap.querySelectorAll("input, select, textarea");
        inputs.forEach((input) => {
            input.addEventListener("focus", () => {
                infoLayout.hideHelp(wrap);
            });
        });
    });

    // 주소 검색
    const btnSearchAddr = document.getElementById("btnSearchAddr");
    const postcheck = document.getElementById("postcheck");
    if (btnSearchAddr) btnSearchAddr.addEventListener("click", infoLayout.handleAddressSearch);
    if (postcheck) postcheck.addEventListener("click", infoLayout.handleAddressSearch);

    // 이메일 선택
    const emailSelect = document.getElementById("Email_Addr");
    const emailInput = document.getElementById("Email_Addr_Text");
    if (emailSelect && emailInput) {
        emailSelect.addEventListener("change", () => {
            infoLayout.updateEmailField(emailSelect, emailInput);
        });
    }

    // 수정 버튼
    const modifyBtn = document.querySelector(".mbrBtnModify_1 a");
    if (modifyBtn) {
        modifyBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const form = document.forms["form"];
            const birth = `${form.M_Year.value}-${String(form.M_Month.value).padStart(2, "0")}-${String(form.M_Day.value).padStart(2, "0")}`;
            const gender = form.querySelector("input[name='M_Gender']:checked")?.value === "1" ? "women" : "man";
            const phone = [form.M_Hand_Phone1?.value, form.M_Hand_Phone2.value, form.M_Hand_Phone3.value].filter(Boolean).join("-");
            const email = `${form.Email_ID.value.trim()}@${form.Email_Addr_Text.value.trim()}`;

            infoLayout.upsertHidden(form, "memberName", form.M_Name.value.trim());
            infoLayout.upsertHidden(form, "memberEmail", email);
            infoLayout.upsertHidden(form, "memberPhone", phone);
            infoLayout.upsertHidden(form, "individualMemberBirth", birth);
            infoLayout.upsertHidden(form, "individualMemberGender", gender);
            infoLayout.upsertHidden(form, "individualMemberEducation", form.M_Education?.value || "");
            
            infoService.submitForm(form);
        });
    }

    // 취소 버튼
    const cancelButton = document.querySelector(".mbrBtn.mbrBtnCancel_1 button");
    if (cancelButton) {
        cancelButton.addEventListener("click", () => {
            location.href = "/mypage/mypage";
        });
    }
});
