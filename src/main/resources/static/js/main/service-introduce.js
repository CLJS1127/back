// 자세히 알고싶어요 화살표
const listShow = document.querySelectorAll(".list_show");
const readmeOpen = document.querySelectorAll(".readme_open");
const contentsBox = document.querySelectorAll(".contents_box");

listShow.forEach((show, idx) => {
    show.addEventListener("click", (e) => {
        // 이 안에 코드가 있어야 클릭할 때 실행됨!
        readmeOpen[idx].dataset.states =
            readmeOpen[idx].dataset.states === "close" ? "open" : "close";
        contentsBox[idx].classList.toggle("active");
    });
});

// 원픽공고 스크랩
const scrabStars = document.querySelectorAll(".rIcon.devAddScrap.devRecommend");

scrabStars.forEach((scrabStar) => {
    scrabStar.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        scrabStar.classList.toggle("str_off");
        scrabStar.classList.toggle("str_on");
    });
});
