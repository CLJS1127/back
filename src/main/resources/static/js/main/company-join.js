// ==========================================
//  비밀번호 표시/숨김 토글
// ==========================================
const passwordInput = document.getElementById("U_PWD");
const passwordToggle = document.querySelector(".dev-password-dp");

if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordToggle.querySelector("span").textContent = "숨김";
        } else {
            passwordInput.type = "password";
            passwordToggle.querySelector("span").textContent = "표시";
        }
    });
}

// ==========================================
//  비밀번호 도움말 버튼
// ==========================================
const btnHelp = document.querySelector(".btnHelp");
const passwordHelpRow = document.querySelector(".mbr_passwd");
const passwordHelpChat = document.querySelector(".lyHelp");

if (btnHelp && passwordHelpRow && passwordHelpChat) {
    btnHelp.addEventListener("click", () => {
        passwordHelpRow.style.zIndex =
            passwordHelpRow.style.zIndex === "9100" ? "auto" : "9100";
        passwordHelpChat.style.display =
            passwordHelpChat.style.display === "block" ? "none" : "block";
    });
}

// ==========================================
//  기업형태 선택 시 외국계 옵션 표시
// ==========================================
const corpType = document.getElementById("Corp_Type");
const nationView = document.querySelectorAll(".devNationView");
const businessLicense = document.querySelector(".business_license");
const companyNum = document.querySelector(".row.company_num");
const attachFileHelp = document.querySelector(".attach-file-help");

if (corpType) {
    corpType.addEventListener("change", () => {
        const value = corpType.value;
        // 외국계 기업 (6, 8, 10) 선택 시 대륙/국가 선택 표시
        if (value === "6" || value === "8" || value === "10") {
            nationView.forEach((el) => {
                el.style.display = "block";
            });
            if (businessLicense) {
                businessLicense.style.display = "block";
                companyNum.style.display = "none";
                attachFileHelp.style.display = "block";
            }
        } else {
            nationView.forEach((el) => {
                el.style.display = "none";
            });
            if (businessLicense) {
                businessLicense.style.display = "none";
                companyNum.style.display = "block";
                attachFileHelp.style.display = "none";
            }
        }
    });
}

// ==========================================
//  사업자등록번호 자동 하이픈
// ==========================================
const corpRegNum = document.getElementById("Corp_RegNum");

if (corpRegNum) {
    corpRegNum.addEventListener("input", () => {
        let value = corpRegNum.value.replace(/[^0-9]/g, "");

        if (value.length > 3 && value.length <= 5) {
            value = value.slice(0, 3) + "-" + value.slice(3);
        } else if (value.length > 5) {
            value =
                value.slice(0, 3) +
                "-" +
                value.slice(3, 5) +
                "-" +
                value.slice(5, 10);
        }

        corpRegNum.value = value;
    });
}

// ==========================================
//  사업자등록증명원 발급번호 자동 하이픈
// ==========================================
const certIssueNo = document.getElementById("CRTFCT_Issue_No");

if (certIssueNo) {
    certIssueNo.addEventListener("input", () => {
        let value = certIssueNo.value.replace(/[^0-9]/g, "");

        // 형식: 0000-000-0000-000
        if (value.length > 4 && value.length <= 7) {
            value = value.slice(0, 4) + "-" + value.slice(4);
        } else if (value.length > 7 && value.length <= 11) {
            value =
                value.slice(0, 4) +
                "-" +
                value.slice(4, 7) +
                "-" +
                value.slice(7);
        } else if (value.length > 11) {
            value =
                value.slice(0, 4) +
                "-" +
                value.slice(4, 7) +
                "-" +
                value.slice(7, 11) +
                "-" +
                value.slice(11, 14);
        }

        certIssueNo.value = value;
    });
}

// ==========================================
//  전화번호 자동 하이픈
// ==========================================
const corpPhone = document.getElementById("Corp_Phone");

if (corpPhone) {
    corpPhone.addEventListener("input", () => {
        let value = corpPhone.value.replace(/[^0-9]/g, "");

        if (value.length > 3 && value.length <= 7) {
            value = value.slice(0, 3) + "-" + value.slice(3);
        } else if (value.length > 7) {
            value =
                value.slice(0, 3) +
                "-" +
                value.slice(3, 7) +
                "-" +
                value.slice(7, 11);
        }

        corpPhone.value = value;
    });
}

// ==========================================
//  사업자등록증명원 발급번호 입력가이드 팝업
// ==========================================
const corpCertInfoBtn = document.querySelector(".devCorpCertInfo");
const corpCertInfoPopup = document.querySelector(".devCorpCertInfoPopup");
const corpCertInfoClose = document.querySelector(".devCorpCertInfoCls");

if (corpCertInfoBtn && corpCertInfoPopup) {
    corpCertInfoBtn.addEventListener("click", () => {
        corpCertInfoPopup.style.display = "flex";
    });
}

if (corpCertInfoClose && corpCertInfoPopup) {
    corpCertInfoClose.addEventListener("click", () => {
        corpCertInfoPopup.style.display = "none";
    });
}

// 팝업 외부 클릭 시 닫기
if (corpCertInfoPopup) {
    const popupDim = corpCertInfoPopup.querySelector(".layer-popup-dim");
    if (popupDim) {
        popupDim.addEventListener("click", () => {
            corpCertInfoPopup.style.display = "none";
        });
    }
}

// ==========================================
//  입력정보 포커스/블러 및 유효성 검증
// ==========================================
const fields = [
    {
        input: "U_ID",
        selector: ".mbr_id",
        notice: "notice_msg_id",
        regexp: /^[a-z0-9]{4,16}$/,
        errorMsg: "4~16자의 영문 소문자, 숫자만 사용 가능합니다.",
    },
    {
        input: "U_PWD",
        selector: ".mbr_passwd",
        notice: "notice_msg_pwd",
        regexp: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/,
        errorMsg: "8~16자의 영문, 숫자, 특수문자를 모두 포함해야 합니다.",
    },
    {
        input: "Mem_Name",
        selector: ".mbr_name",
        notice: "notice_msg_name",
        regexp: /^[가-힣a-zA-Z\s]{2,12}$/,
        errorMsg: "2~12자의 한글, 영문만 입력 가능합니다.",
    },
    {
        input: "Corp_Phone",
        selector: ".mbr_phone",
        notice: "notice_msg_phone",
        regexp: /^0\d{1,2}-?\d{3,4}-?\d{4}$/,
        errorMsg: "올바른 전화번호를 입력해주세요.",
    },
    {
        input: "email",
        selector: ".mbr_email",
        notice: "notice_msg_mail",
        regexp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        errorMsg: "올바른 이메일 형식을 입력해주세요.",
    },
    {
        input: "Corp_RegNum",
        selector: ".company_num",
        notice: "notice_msg_regnum",
        regexp: /^\d{3}-?\d{2}-?\d{5}$/,
        errorMsg: "올바른 사업자등록번호를 입력해주세요.",
    },
    {
        input: "Corp_Name",
        selector: ".company_name",
        notice: "notice_msg_corp_name",
        regexp: /^.{1,50}$/,
        errorMsg: "회사명을 입력해주세요.",
    },
    {
        input: "Boss_Name",
        selector: ".company_bossname",
        notice: "notice_msg_ceo_name",
        regexp: /^[가-힣a-zA-Z\s]{2,20}$/,
        errorMsg: "대표자명을 입력해주세요.",
    },
];

// 포커스 / 블러 이벤트
fields.forEach(({ input, selector, notice, regexp, errorMsg }) => {
    const inputEl = document.getElementById(input);
    const col1 = document.querySelector(`${selector} .col_1`);
    const col2 = document.querySelector(`${selector} .col_2`);
    const noticeEl = document.getElementById(notice);

    if (!inputEl) return;

    // 포커스
    inputEl.addEventListener("focus", () => {
        if (col1) col1.classList.add("focus");
        if (col2) col2.classList.add("focus");
    });

    // 블러 (포커스 해제)
    inputEl.addEventListener("blur", () => {
        // 값 없으면 포커스 스타일 제거
        if (!inputEl.value) {
            if (col1) col1.classList.remove("focus");
            if (col2) col2.classList.remove("focus");
        }

        // 정규식 검증
        if (regexp && noticeEl) {
            if (!inputEl.value) {
                noticeEl.innerHTML = "필수 입력 항목입니다.";
                noticeEl.classList.add("failure");
                noticeEl.style.display = "block";
            } else if (!regexp.test(inputEl.value)) {
                noticeEl.innerHTML = errorMsg;
                noticeEl.classList.add("failure");
                noticeEl.style.display = "block";
            } else {
                noticeEl.innerHTML = "";
                noticeEl.classList.remove("failure");
                noticeEl.style.display = "none";
            }
        }
    });
});

// ==========================================
//  체크박스 전체 선택 / 개별 선택
// ==========================================
const inputChkAll = document.getElementById("lb_chk_all");
const chkAll = document.querySelector(".chk_all");
const checkBoxInputs = document.querySelectorAll(".devAgreeCheck");
const checkBoxLabels = [
    document.querySelector(".chk_service"),
    document.querySelector(".chk_sms"),
    document.querySelector(".chk_privacyOptional"),
];

// 전체 선택
if (inputChkAll && chkAll) {
    inputChkAll.addEventListener("change", () => {
        const isChecked = inputChkAll.checked;

        chkAll.classList.toggle("on", isChecked);

        checkBoxInputs.forEach((input, idx) => {
            input.checked = isChecked;
            if (checkBoxLabels[idx]) {
                checkBoxLabels[idx].classList.toggle("on", isChecked);
            }
        });
    });
}

// 개별 선택
checkBoxInputs.forEach((input, idx) => {
    input.addEventListener("change", () => {
        if (checkBoxLabels[idx]) {
            checkBoxLabels[idx].classList.toggle("on", input.checked);
        }

        // 필수 약관 체크 여부 확인
        const requiredInputs = document.querySelectorAll(
            ".required .devAgreeCheck",
        );
        const allRequiredChecked = Array.from(requiredInputs).every(
            (cb) => cb.checked,
        );
        const allChecked = Array.from(checkBoxInputs).every((cb) => cb.checked);

        if (inputChkAll) {
            inputChkAll.checked = allChecked;
            if (chkAll) {
                chkAll.classList.toggle("on", allChecked);
            }
        }
    });
});

// ==========================================
//  약관 내용보기 토글
// ==========================================
const policyBtns = document.querySelectorAll(".mbrBtnPolicy");

policyBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        btn.classList.toggle("on");

        // 버튼의 부모 요소에서 해당하는 policyTplBox 찾기
        const policyTplBox = btn.closest(".row").querySelector(".policyTplBox");

        if (policyTplBox) {
            policyTplBox.style.display =
                policyTplBox.style.display === "block" ? "none" : "block";
        }
    });
});

// ==========================================
//  첨부파일 삭제 버튼
// ==========================================
const fileDeleteBtn = document.querySelector(".fileDeleteButton");
const fileInput = document.getElementById("Corp_RegFile");

if (fileDeleteBtn && fileInput) {
    fileDeleteBtn.addEventListener("click", () => {
        fileInput.value = "";
    });
}

// ==========================================
//  첨부파일 추가
// ==========================================
const BusinessLicenseLabel = document.querySelector(
    ".row.business_license div div",
);

// ==========================================
//  가입하기 버튼 - 유효성 검증
// ==========================================
const submitBtn = document.querySelector(".dev-submit");

if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let isValid = true;

        // 기업형태 검증
        const corpTypeSelect = document.getElementById("Corp_Type");
        if (corpTypeSelect && !corpTypeSelect.value) {
            alert("기업형태를 선택해주세요.");
            corpTypeSelect.focus();
            isValid = false;
            return;
        }

        // 입력 필드 검증
        fields.forEach(({ input, notice, regexp, errorMsg }) => {
            const inputEl = document.getElementById(input);
            const noticeEl = document.getElementById(notice);

            if (!inputEl) return;

            if (!inputEl.value) {
                if (noticeEl) {
                    noticeEl.innerHTML = "필수 입력 항목입니다.";
                    noticeEl.classList.add("failure");
                    noticeEl.style.display = "block";
                }
                isValid = false;
            } else if (regexp && !regexp.test(inputEl.value)) {
                if (noticeEl) {
                    noticeEl.innerHTML = errorMsg;
                    noticeEl.classList.add("failure");
                    noticeEl.style.display = "block";
                }
                isValid = false;
            } else {
                if (noticeEl) {
                    noticeEl.innerHTML = "";
                    noticeEl.classList.remove("failure");
                    noticeEl.style.display = "none";
                }
            }
        });

        // 회사주소 검증
        const zipCode = document.getElementById("Zip_Code");
        const addrNotice = document.getElementById("msg_addr");
        if (zipCode && !zipCode.value) {
            if (addrNotice) {
                addrNotice.innerHTML = "회사주소를 입력해주세요.";
                addrNotice.classList.add("failure");
                addrNotice.style.display = "block";
            }
            isValid = false;
        }

        // 필수 약관 검증
        const requiredAgrees = document.querySelectorAll(
            ".required .devAgreeCheck",
        );
        const agreeNotice = document.getElementById("notice_msg_agree");
        const allRequiredChecked = Array.from(requiredAgrees).every(
            (cb) => cb.checked,
        );

        if (!allRequiredChecked) {
            if (agreeNotice) {
                agreeNotice.style.display = "block";
            }
            isValid = false;
        } else {
            if (agreeNotice) {
                agreeNotice.style.display = "none";
            }
        }

        // 검증 결과
        if (!isValid) {
            alert("필수 항목을 확인해주세요.");
        } else {
            // 폼 제출
            document.getElementById("form").submit();
        }
    });
}

// ==========================================
// 13. 본인인증 버튼
// ==========================================
const certifyBtn = document.querySelector(".devCertifyBtn");

if (certifyBtn) {
    certifyBtn.addEventListener("click", () => {
        // 본인인증 팝업 또는 API 호출
        alert("본인인증 기능은 별도 구현이 필요합니다.");
    });
}

// ==========================================
// 14. 대륙 선택 시 국가 목록 변경
// ==========================================
const continentSelect = document.getElementById("Contn_Code");
const nationSelect = document.getElementById("Nation_Code");

const nationData = {
    R: [
        // 아시아
        { value: "JP", text: "일본" },
        { value: "CN", text: "중국" },
        { value: "VN", text: "베트남" },
        { value: "TH", text: "태국" },
        { value: "SG", text: "싱가포르" },
        { value: "MY", text: "말레이시아" },
        { value: "ID", text: "인도네시아" },
        { value: "PH", text: "필리핀" },
        { value: "IN", text: "인도" },
    ],
    U: [
        // 유럽
        { value: "GB", text: "영국" },
        { value: "DE", text: "독일" },
        { value: "FR", text: "프랑스" },
        { value: "IT", text: "이탈리아" },
        { value: "ES", text: "스페인" },
        { value: "NL", text: "네덜란드" },
    ],
    S: [
        // 북아메리카
        { value: "US", text: "미국" },
        { value: "CA", text: "캐나다" },
        { value: "MX", text: "멕시코" },
    ],
    T: [
        // 남아메리카
        { value: "BR", text: "브라질" },
        { value: "AR", text: "아르헨티나" },
        { value: "CL", text: "칠레" },
    ],
    W: [
        // 아프리카
        { value: "ZA", text: "남아프리카공화국" },
        { value: "EG", text: "이집트" },
        { value: "NG", text: "나이지리아" },
    ],
    V: [
        // 오세아니아
        { value: "AU", text: "호주" },
        { value: "NZ", text: "뉴질랜드" },
    ],
};

if (continentSelect && nationSelect) {
    continentSelect.addEventListener("change", () => {
        const continent = continentSelect.value;

        // 기존 옵션 제거
        nationSelect.innerHTML = '<option value=""></option>';

        // 선택된 대륙의 국가 목록 추가
        if (nationData[continent]) {
            nationData[continent].forEach((nation) => {
                const option = document.createElement("option");
                option.value = nation.value;
                option.textContent = nation.text;
                nationSelect.appendChild(option);
            });
        }
    });
}

// 비밀번호 표시
const mbrBtnAuth = document.querySelector(".mbrBtnAuth.dev-password-dp");

mbrBtnAuth.addEventListener("click", (e) => {
    mbrBtnAuth.classList.toggle("selected");
});

// ==========================================
// 15. Select 요소 포커스/블러 및 유효성 검증
// ==========================================
const selectFields = [
    {
        select: "Corp_Type",
        selector: ".mbr_co_type",
        required: true,
        errorMsg: "기업형태를 선택해주세요.",
    },
    {
        select: "Contn_Code",
        selector: ".mbr_foreign_type1",
        required: true,
        errorMsg: "대륙을 선택해주세요.",
    },
    {
        select: "Nation_Code",
        selector: ".mbr_foreign_type2",
        required: true,
        errorMsg: "국가를 선택해주세요.",
    },
];

selectFields.forEach(({ select, selector, required, errorMsg }) => {
    const selectEl = document.getElementById(select);
    const col1 = document.querySelector(`${selector} .col_1`);
    const col2 = document.querySelector(`${selector} .col_2`);
    const noticeEl = document.querySelector(`${selector} .notice_msg`);

    if (!selectEl) return;

    // 포커스
    selectEl.addEventListener("focus", () => {
        if (col1) col1.classList.add("focus");
        if (col2) col2.classList.add("focus");
    });

    // 블러
    selectEl.addEventListener("blur", () => {
        if (!selectEl.value) {
            if (col1) col1.classList.remove("focus");
            if (col2) col2.classList.remove("focus");

            // 유효성 검증 (필수 항목이고, 화면에 보이는 경우만)
            if (
                required &&
                noticeEl &&
                selectEl.closest(".row").style.display !== "none"
            ) {
                noticeEl.innerHTML = errorMsg;
                noticeEl.classList.add("failure");
                noticeEl.style.display = "block";
            }
        } else {
            // 값이 있으면 에러 제거
            if (noticeEl) {
                noticeEl.innerHTML = "";
                noticeEl.classList.remove("failure");
                noticeEl.style.display = "none";
            }
        }
    });

    // 값 변경 시
    selectEl.addEventListener("change", () => {
        if (selectEl.value) {
            if (col1) col1.classList.add("focus");
            if (col2) col2.classList.add("focus");

            // 에러 메시지 제거
            if (noticeEl) {
                noticeEl.innerHTML = "";
                noticeEl.classList.remove("failure");
                noticeEl.style.display = "none";
            }
        }
    });
});

// ==========================================
// 16. 회사주소 - 다음 주소 API
// ==========================================
const addrBtn = document.querySelector(".input-profile-addr");
const addrValue = document.querySelector(".input-profile-addr .value");
const zipCodeInput = document.getElementById("Zip_Code");
const addAddrInput = document.getElementById("Add_Addr");
const addrTypeInput = document.getElementById("Addr_Type");
const addrTextInput = document.getElementById("Addr_Text");
const addrText1Input = document.getElementById("Addr_Text1");
const addrNotice = document.getElementById("msg_addr");

if (addrBtn) {
    addrBtn.addEventListener("click", (e) => {
        e.preventDefault();

        new daum.Postcode({
            oncomplete: function (data) {
                let addr = "";
                let extraAddr = "";

                // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === "R") {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }

                // 도로명 주소일 경우 참고항목 조합
                if (data.userSelectedType === "R") {
                    if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    }
                    if (data.buildingName !== "" && data.apartment === "Y") {
                        extraAddr +=
                            extraAddr !== ""
                                ? ", " + data.buildingName
                                : data.buildingName;
                    }
                    if (extraAddr !== "") {
                        extraAddr = " (" + extraAddr + ")";
                    }
                }

                // 화면에 표시되는 주소
                const fullAddr = `[${data.zonecode}] ${addr}${extraAddr}`;
                if (addrValue) {
                    addrValue.textContent = fullAddr;
                }

                // hidden input에 값 저장
                if (zipCodeInput) zipCodeInput.value = data.zonecode;
                if (addrTextInput) addrTextInput.value = addr;
                if (addrText1Input) addrText1Input.value = extraAddr;
                if (addrTypeInput) addrTypeInput.value = data.userSelectedType;

                // 포커스 스타일 추가 (is-value 클래스)
                addrBtn.classList.add("is-value");

                // 에러 메시지 제거
                if (addrNotice) {
                    addrNotice.innerHTML = "";
                    addrNotice.classList.remove("failure");
                    addrNotice.style.display = "none";
                }
            },
        }).open();
    });
}
