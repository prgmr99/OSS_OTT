const api_key = "28480f953401db60e553e41284f5f407";
const lang = "ko";
const imgBase = "https://image.tmdb.org/t/p/w500";
const listWidth = document.querySelector("section").scrollWidth / 5; // 영화 리스트를 메인 화면에 출력하는 개수

const makeList = (movie, ul, Num) => {
    const $li = document.createElement("li"); // $참조하는 변수라는 의미 jQuery 변수
    const $a = document.createElement("a");
    const $img = document.createElement("img");
    $li.id = movie.id;
    $a.hret = "#";
    $img.src = `${imgBase}${movie.backdrop_path}`;
    $a.textContent = movie.title;
    $a.insertAdjacentElement("afterbegin", $img);
    if(ul.classList.contains("top10-list")) {
        const $span = document.createElement("span");
        $span.textContent = num;
        $a.appendChild($span);
    }
    $li.appendChild($a);
    ul.appendChild($li);
    $li.style.width = `${listWidth}px`;
};