// 팁 닫기
const tipCloseButton = document.querySelector(
    ".my-status-top .badge .tip .tip-close",
);
const tipDiv = document.querySelector(".my-status-top .badge .tip");
if (tipCloseButton && tipDiv) {
    tipCloseButton.addEventListener("click", (e) => {
        tipDiv.classList.add("close");
    });
}

// 스크랩 버튼 눌렀을 때 작동 (이벤트 위임 방식)
document.addEventListener("click", (e) => {
    const scrapbutton = e.target.closest(".tplBtnTy.js-scrBtn");
    if (scrapbutton) {
        e.preventDefault();
        e.stopPropagation();
        scrapbutton.classList.toggle("on");
        scrapbutton.classList.toggle("tplBtnScrOff");
        scrapbutton.classList.toggle("tplBtnScrOn");
    }
});

// 원픽 공고 슬라이더 구현
const celebrateSlider = (function () {
    const wrapper = document.querySelector(".celebrate_my .swiper-wrapper");
    const slides = document.querySelectorAll(".celebrate_my .swiper-slide");
    const prevBtn = document.querySelector(".celebrate-btn-prev");
    const nextBtn = document.querySelector(".celebrate-btn-next");

    if (!wrapper || !prevBtn || !nextBtn) return;

    const slidesPerView = 3; // 한 번에 보이는 슬라이드 수
    const slideWidth = 304; // 슬라이드 너비
    const slideGap = 12; // 슬라이드 간격
    const moveDistance = (slideWidth + slideGap) * slidesPerView; // 한 번에 이동하는 거리

    const totalSlides = slides.length;
    const totalPages = Math.ceil(totalSlides / slidesPerView); // 총 페이지 수 (3)
    let currentPage = 0; // 0, 1, 2 (0부터 시작)

    // 버튼 상태 업데이트 함수
    function updateButtons() {
        // prev 버튼: 첫 페이지면 비활성화
        if (currentPage === 0) {
            prevBtn.classList.add("swiper-button-disabled");
            prevBtn.setAttribute("aria-disabled", "true");
        } else {
            prevBtn.classList.remove("swiper-button-disabled");
            prevBtn.setAttribute("aria-disabled", "false");
        }

        // next 버튼: 마지막 페이지면 비활성화
        if (currentPage === totalPages - 1) {
            nextBtn.classList.add("swiper-button-disabled");
            nextBtn.setAttribute("aria-disabled", "true");
        } else {
            nextBtn.classList.remove("swiper-button-disabled");
            nextBtn.setAttribute("aria-disabled", "false");
        }
    }

    // 슬라이드 이동 함수
    function moveSlider() {
        const translateX = -currentPage * moveDistance;
        wrapper.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
        wrapper.style.transitionDuration = "300ms"; // 애니메이션
        updateButtons();
    }

    // Next 버튼 클릭
    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            moveSlider();
        }
    });

    // Prev 버튼 클릭
    prevBtn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            moveSlider();
        }
    });

    // 초기 상태 설정
    updateButtons();
})();

// 스크랩, 최근 본 공고 탭 버튼
const tabLists = document.querySelectorAll(".mtuTab.devFixedTab ul li");

tabLists.forEach((tabList) => {
    tabList.addEventListener("click", (e) => {
        tabLists.forEach((tab) => tab.classList.remove("on"));
        tabList.classList.add("on");
    });
});

// 프로필 사진 편집 모달
const profileModal = document.getElementById("profileModal");
const profileBtn = document.querySelector(".profile-btn.btnRegist");
const modalClose = document.getElementById("modalClose");
const modalCancel = document.getElementById("modalCancel");
const modalConfirm = document.querySelector(".btn-confirm"); // 저장 버튼
const profileInput = document.getElementById("profileInput");
const previewImg = document.getElementById("previewImg");
const currentProfileImg = document.querySelector(".profile-img .img img");

if (profileModal && profileBtn) {
    // 기본 이미지
    const defaultImg =
        "https://www.jobkorea.co.kr/Images/Mng/Mypage/icon-profile.png";

    // 모달 열기
    profileBtn.addEventListener("click", () => {
        if (previewImg && currentProfileImg) {
            previewImg.src = currentProfileImg.src || defaultImg;
        }
        profileModal.classList.add("show");
    });

    // 모달 닫기 (X 버튼)
    if (modalClose) {
        modalClose.addEventListener("click", () => {
            profileModal.classList.remove("show");
        });
    }

    // 모달 닫기 (취소 버튼)
    if (modalCancel) {
        modalCancel.addEventListener("click", () => {
            profileModal.classList.remove("show");
        });
    }

    // 저장 버튼 - 프로필 이미지 변경 후 닫기
    if (modalConfirm) {
        modalConfirm.addEventListener("click", () => {
            if (previewImg && currentProfileImg) {
                currentProfileImg.src = previewImg.src;
            }
            profileModal.classList.remove("show");
        });
    }

    // 모달 닫기 (오버레이 클릭)
    profileModal.addEventListener("click", (e) => {
        if (e.target === profileModal) {
            profileModal.classList.remove("show");
        }
    });

    // ESC 키로 모달 닫기
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && profileModal.classList.contains("show")) {
            profileModal.classList.remove("show");
        }
    });

    // 이미지 미리보기 (새 사진 선택 시)
    if (profileInput) {
        profileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file && previewImg) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    previewImg.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// ============================================
// 보유스킬 모달 기능
// ============================================

// DOM이 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", function () {
    // 모달 요소들
    const skillModal = document.querySelector(".popupSkill");
    const skillList = document.querySelector(".skill-list.expand-list");

    if (!skillModal || !skillList) {
        console.error("보유스킬 모달 또는 스킬 리스트를 찾을 수 없습니다.");
        return;
    }

    // 보유스킬 제목을 클릭했을 때 모달 열기
    const skillLinks = document.querySelectorAll(".my-status-list a");
    let skillOpenBtn = null;

    skillLinks.forEach((link) => {
        const h5 = link.querySelector("h5.list-title");
        if (h5 && h5.textContent.includes("보유스킬")) {
            skillOpenBtn = link;
        }
    });

    if (!skillOpenBtn) {
        console.error("보유스킬 링크를 찾을 수 없습니다.");
        return;
    }

    const skillCancelBtn = skillModal.querySelector(".btn.cancel");
    const skillCheckBtn = skillModal.querySelector(".btn.check");
    const skillCloseBtn = skillModal.querySelector(".buttonClose");
    const skillButtons = skillModal.querySelectorAll(
        ".list-btn.dev-skill-item",
    );

    // 1. 보유스킬 링크 클릭 시 모달 열기
    skillOpenBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // 현재 선택된 스킬들을 모달에 반영
        const currentSkills = Array.from(skillList.querySelectorAll("li")).map(
            (li) => li.textContent.trim(),
        );

        // 모든 스킬 버튼의 on 클래스 초기화 후 현재 스킬들만 on 클래스 추가
        skillButtons.forEach((btn) => {
            const skillName = btn.getAttribute("data-name");
            if (currentSkills.includes(skillName)) {
                btn.classList.add("on");
            } else {
                btn.classList.remove("on");
            }
        });

        // 모달 열기
        skillModal.classList.remove("hidden");
        skillModal.setAttribute("aria-hidden", "false");
    });

    // 2. 모달 내 스킬 버튼 클릭 시 on 클래스 토글
    skillButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("on");
        });
    });

    // 3. 확인 버튼 클릭 시 선택된 스킬들을 skill-list에 추가
    if (skillCheckBtn) {
        skillCheckBtn.addEventListener("click", () => {
            // 현재 선택된 스킬들 (on 클래스가 있는 버튼들)
            const selectedSkills = Array.from(skillButtons)
                .filter((btn) => btn.classList.contains("on"))
                .map((btn) => btn.getAttribute("data-name"));

            // skill-list 초기화 후 선택된 스킬들 추가
            skillList.innerHTML = "";
            selectedSkills.forEach((skillName) => {
                const li = document.createElement("li");
                li.textContent = skillName;
                skillList.appendChild(li);
            });

            // 모달 닫기
            skillModal.classList.add("hidden");
            skillModal.setAttribute("aria-hidden", "true");
        });
    }

    // 4. 취소 버튼 클릭 시 모달 닫기
    if (skillCancelBtn) {
        skillCancelBtn.addEventListener("click", () => {
            skillModal.classList.add("hidden");
            skillModal.setAttribute("aria-hidden", "true");
        });
    }

    // 5. 닫기(X) 버튼 클릭 시 모달 닫기
    if (skillCloseBtn) {
        skillCloseBtn.addEventListener("click", () => {
            skillModal.classList.add("hidden");
            skillModal.setAttribute("aria-hidden", "true");
        });
    }

    // 6. 모달 외부 클릭 시 모달 닫기
    skillModal.addEventListener("click", (e) => {
        if (e.target === skillModal) {
            skillModal.classList.add("hidden");
            skillModal.setAttribute("aria-hidden", "true");
        }
    });

    // 7. ESC 키로 모달 닫기
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !skillModal.classList.contains("hidden")) {
            skillModal.classList.add("hidden");
            skillModal.setAttribute("aria-hidden", "true");
        }
    });
});
