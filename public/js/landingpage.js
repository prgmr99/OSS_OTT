import {
    email,
    obj_user,
    movies
} from "../js/signIn.js";
const api_key = '6c616e9a21c6e51d1191f6fc4f2d11c4';
//const $search_form = document.querySelector('.search_form');
//const $search_txt = document.querySelector('.search_txt');s
const $result_contents = document.querySelector('.result_contents');
//const $seriesList = document.querySelector('.seriesList');
const $movieList = document.querySelector('.movieList');
const $fragment = document.createDocumentFragment();
const signInBtn = document.querySelector('#signInBtn');
//console.log(email);
const $seriesTopList = document.querySelector('.top10-serieslist'); // TOP 10 영화 리스트 접근 변수
const $moviesTopList = document.querySelector('.top10-movieslist'); // TOP 10 시리즈 리스트 접근 변수
//console.log(email);
/*$search_form.onsubmit = e => {
    e.preventDefault();
    $result_contents.innerHTML = '';
    console.log($search_form.querySelector('input').value);
};*/

// 영화 목록 가져오기 함수
const getMovieList = async () => {
    try {
        const getMovie = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ko-KR&page=1&region=KR`
        );
        const {
            results
        } = await getMovie.json();
        results.forEach(content => {
            const $li_movies = document.createElement('li'); // ul 안의 각각의 리스트 요소
            $li_movies.id = content.id; // 사진의 id를 id에 저장
            const $a = document.createElement('a'); // 링크 태그 생성
            $a.href = '#';
            const $img = document.createElement('img'); // 링크 태그 내에 넣을 이미지 생성
            if (content.poster_path == null) {
                $img.src = '../image/notready.png';
            } else {
                $img.src = `https://image.tmdb.org/t/p/w500/${content.poster_path}`;
            }
            const textNode = document.createTextNode(content.title); // 영화 제목 저장
            
            $a.append($img);
            $a.append(textNode);
            $li_movies.append($a);
            $fragment.append($li_movies);
            $moviesTopList.append($fragment);
        });
    } catch (err) {
        console.log('[ERROR]' + err);
    }
}
getMovieList();

// 시리즈 리스트 가져오는 함수
const getSeriesList = async () => {
    try {
        const getSeries = await fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=ko-KR&page=1&region=KR`
        );
        const {
            results
        } = await getSeries.json();
        results.forEach(content => {
            const $li_series = document.createElement('li'); // 각각의 리스트 요소
            $li_series.id = content.id;
            const $a = document.createElement('a'); // 링크 생성
            $a.href = '#';
            const $img = document.createElement('img'); // 링크 내에 들어갈 이미지 생성
            if (content.poster_path == null) {
                $img.src = '../image/notready.png';
            } else {
                $img.src = `https://image.tmdb.org/t/p/w500/${content.poster_path}`;
            }
            const textNode = document.createTextNode(content.name);

            $a.append($img); // 링크에 이미지 추가
            $a.append(textNode); // 링크에 영화 제목 추가
            $li_series.append($a); // 리스트에 해당 링크(이미지 + 제목) 추가
            $fragment.append($li_series); // 해당 리스트 묶음을 전달 개체에 추가
            $seriesTopList.append($fragment); // html에 전달 개체의 내용 추가
        });
    } catch (err) {
        console.log('[ERROR]' + err);
    }
}
getSeriesList();
