// 다음 주소 API 연결

document.addEventListener("DOMContentLoaded", function () {
    const addressInput = document.getElementById("address");
    const detailAddressInput = document.getElementById("detailAddress");

    // 주소 입력란 클릭 시 주소 검색 팝업 실행
    if (addressInput) {
        addressInput.addEventListener("click", function () {
            execDaumPostcode();
        });
    }
});

// 다음 주소 검색 팝업 실행
function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            let addr = ""; // 주소 변수
            let extraAddr = ""; // 참고항목 변수

            // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === "R") {
                // 도로명 주소 선택
                addr = data.roadAddress;
            } else {
                // 지번 주소 선택
                addr = data.jibunAddress;
            }

            // 도로명 타입일 때 참고항목을 조합한다.
            if (data.userSelectedType === "R") {
                // 법정동명이 있을 경우 추가한다. (동/로/가로 끝나는 경우)
                if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if (data.buildingName !== "" && data.apartment === "Y") {
                    extraAddr +=
                        extraAddr !== ""
                            ? ", " + data.buildingName
                            : data.buildingName;
                }
                // 참고항목이 있을 경우 괄호로 감싼다.
                if (extraAddr !== "") {
                    extraAddr = " (" + extraAddr + ")";
                }
            }

            // 주소 정보를 해당 필드에 넣는다.
            document.getElementById("address").value = addr + extraAddr;

            // 상세주소 입력란 표시 및 포커스
            const detailAddressInput = document.getElementById("detailAddress");
            detailAddressInput.style.display = "block";
            detailAddressInput.focus();
        },
    }).open({ popupKey: "popup1" });
}

//
const startInputClick = document.getElementById("start-date");

startInputClick.addEventListener("click", (e) => {
    e.target.showPicker?.();
});

//
const endInputClick = document.getElementById("end-date");

endInputClick.addEventListener("click", (e) => {
    e.target.showPicker?.();
});

// 버튼 클릭 시 드롭다운 열리기
const emailBtn = document.querySelector(".btnSelType");
const emailDropDown = document.querySelector(".lySelOption");

emailBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    emailDropDown.style.display = "block";
});

// 드롭다운 내부 클릭 시 닫히지 않게
emailDropDown.addEventListener("click", (e) => {
    e.stopPropagation();
});

// 바깥 클릭 시 닫기
document.addEventListener("click", () => {
    emailDropDown.style.display = "none";
});

// 스크롤 시 닫기
window.addEventListener("scroll", () => {
    emailDropDown.style.display = "none";
});

// 이메일 클릭 시 input에 value 들어가게
const insertEmailBtn = document.querySelectorAll(".selTypeList li button");
const emailValue = document.querySelector(".devEmailDomain");

insertEmailBtn.forEach((Btn, i) => {
    Btn.addEventListener("click", (e) => {
        emailValue.value = Btn.textContent;
        emailDropDown.style.display = "none";
    });
});

console.log(insertEmailBtn);

// 버튼 클릭 시 border 바뀌는 코드

const changeMonthBtn = document.querySelectorAll(".button--period");

changeMonthBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        changeMonthBtn.forEach((b) => b.classList.remove("button--active"));
        btn.classList.add("button--active");
    });
});
