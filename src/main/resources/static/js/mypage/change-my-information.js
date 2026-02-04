// 다음 주소 API
function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 우편번호
            const zonecode = data.zonecode;

            // 주소 (도로명 또는 지번)
            let addr = "";
            if (data.userSelectedType === "R") {
                addr = data.roadAddress;
            } else {
                addr = data.jibunAddress;
            }

            // 참고항목 (도로명 주소일 때)
            let extraAddr = "";
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

            // 기존 필드에 값 넣기
            document.getElementById("postcheck").value = zonecode;
            document.getElementById("M_ZipCode").value = zonecode;
            document.getElementById("M_Addr_Text").value = addr + extraAddr;

            // 상세주소 필드로 포커스 이동
            document.getElementById("M_Addr_Text1").value = "";
            document.getElementById("M_Addr_Text1").focus();
        },
    }).open();
}

// 주소 검색 버튼 클릭 이벤트
document
    .getElementById("btnSearchAddr")
    .addEventListener("click", execDaumPostcode);

// 우편번호 입력창 클릭해도 실행
document
    .getElementById("postcheck")
    .addEventListener("click", execDaumPostcode);

// 도움말 레이어 표시/숨김
(function () {
    const helpWraps = document.querySelectorAll(".mbrHelpWrap");

    helpWraps.forEach((wrap) => {
        const inputs = wrap.querySelectorAll("input, select, textarea");
        const helpLayer = wrap.querySelector(".mbrLayerHelp");

        if (!helpLayer) return;

        inputs.forEach((input) => {
            // input/select 클릭 시 (값이 없을 때만 레이어 표시)
            input.addEventListener("focus", (e) => {
                if (input.value.length === 0) {
                    helpLayer.style.display = "block";
                }
            });

            // 다른 곳 클릭 시 (값이 있으면 숨김)
            input.addEventListener("blur", (e) => {
                if (input.value.length > 0) {
                    helpLayer.style.display = "none";
                }
            });
        });
    });
})();

// 이메일 선택 시 input에 값 넣기
const emailSelect = document.getElementById("Email_Addr");
const emailInput = document.getElementById("Email_Addr_Text");

emailSelect.addEventListener("change", () => {
    const selectedValue = emailSelect.value;

    // 직접입력(etc)이 아니면 input에 값 넣기
    if (selectedValue !== "etc" && selectedValue !== "") {
        emailInput.value = selectedValue;
        emailInput.readOnly = true; // 수정 불가
    } else {
        // 직접입력이면 input 비우고 수정 가능하게
        emailInput.value = "";
        emailInput.readOnly = false;
        emailInput.focus();
    }
});

// 수정하기 버튼 클릭
const modifyBtn = document.querySelector(".mbrBtnModify_1 a");

modifyBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.forms["form"];
    let isValid = true;

    // 이름
    if (!form.M_Name.value.trim()) {
        document.getElementById("CautionResult6").style.display = "block";
        isValid = false;
    }

    // 출생연도
    if (!form.M_Year.value) {
        document.getElementById("CautionResult7").style.display = "block";
        isValid = false;
    }

    // 휴대폰번호
    if (!form.M_Hand_Phone2.value.trim() || !form.M_Hand_Phone3.value.trim()) {
        document.getElementById("CautionResult1").style.display = "block";
        isValid = false;
    }

    // 이메일
    if (!form.Email_ID.value.trim() || !form.Email_Addr_Text.value.trim()) {
        document.getElementById("CautionResult2").style.display = "block";
        isValid = false;
    }

    // 모두 입력되었으면
    if (isValid) {
        alert("수정완료되었습니다.");
    }
});

// 취소 버튼
const cancelButton = document.querySelector(".mbrBtn.mbrBtnCancel_1 button");

cancelButton.addEventListener("click", (e) => {
    location.href = "";
});

// 비밀번호 변경하기(카카오일경우)
// const kakaoChangePswdButton = document.querySelector(".secNav ol li.mn2 a");
// kakaoChangePswdButton.addEventListener("click", (e) => {
//     alert("카카오 아이디로 로그인 하신 경우, \n 비밀번호는 카카오에서 변경하실 수 있습니다.");
// });
