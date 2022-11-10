const api_key = "28480f953401db60e553e41284f5f407";
const lang = "ko";
const imgBase = "https://image.tmdb.org/t/p/w500";
const $movieLists = document.querySelectorAll('.main section'); // .main section 조정해야 영화 출력.
// 추후에 section 변경
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
        $span.textContent = Num;
        $a.appendChild($span);
    }
    $li.appendChild($a);
    ul.appendChild($li);
    //$li.style.width = `${listWidth}px`; // 리스트 폭 css 보고 맞추기.
};

const getMovieList = async (getValue, $ul) => {
    if(getValue === 'favorite') {
        const genreRes = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=ko`,
        );
        const { genres } = await genreRes.json();
        genreList = genres;
    }

    const url =
        getValue === 'favorite'
            ? `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${
                genreList.find(genreLi => genreLi.name === localUser.genre).id
            }&language=$(lang)`
            : `https://api.themoviedb.org/3/movie/${getValue}?api_key=${api_key}&language=$(lang)&page=1`;
    const res = await fetch(url);
    const { results: movies } = await res.json();
    await movies.forEach((movie, i) => {
        makeList(movie, $ul, i + 1);
        if( i === movies.length - 1) cloneLi($ul);
    });
    //$ul.style.width = `${(movies.length + 4) * listWidth}px`; 리스트 폭 css 보고 맞추기.
};

[...$movieLists].forEach($list => {
    getMovieList($list.id, $list.querySelector('ul'));
});
