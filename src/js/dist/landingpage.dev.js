"use strict";

var _signIn = require("../js/signIn.js");

var api_key = '6c616e9a21c6e51d1191f6fc4f2d11c4'; //const $search_form = document.querySelector('.search_form');
//const $search_txt = document.querySelector('.search_txt');s

var $result_contents = document.querySelector('.result_contents'); //const $seriesList = document.querySelector('.seriesList');

var $movieList = document.querySelector('.movieList');
var $fragment = document.createDocumentFragment();
var signInBtn = document.querySelector('#signInBtn'); //console.log(email);

var $seriesTopList = document.querySelector('.top10-serieslist'); // TOP 10 영화 리스트 접근 변수

var $moviesTopList = document.querySelector('.top10-movieslist'); // TOP 10 시리즈 리스트 접근 변수
//console.log(email);

/*$search_form.onsubmit = e => {
    e.preventDefault();
    $result_contents.innerHTML = '';
    console.log($search_form.querySelector('input').value);
};*/
// 영화 목록 가져오기 함수

var getMovieList = function getMovieList() {
  var getMovie, _ref, results;

  return regeneratorRuntime.async(function getMovieList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(api_key, "&language=ko-KR&page=1&region=KR")));

        case 3:
          getMovie = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(getMovie.json());

        case 6:
          _ref = _context.sent;
          results = _ref.results;
          results.forEach(function (content) {
            var $li_movies = document.createElement('li'); // ul 안의 각각의 리스트 요소

            $li_movies.id = content.id; // 사진의 id를 id에 저장

            var $a = document.createElement('a'); // 링크 태그 생성

            $a.href = '#';
            var $img = document.createElement('img'); // 링크 태그 내에 넣을 이미지 생성

            if (content.poster_path == null) {
              $img.src = '../image/notready.png';
            } else {
              $img.src = "https://image.tmdb.org/t/p/w500/".concat(content.poster_path);
            }

            var textNode = document.createTextNode(content.title); // 영화 제목 저장

            $a.append($img);
            $a.append(textNode);
            $li_movies.append($a);
            $fragment.append($li_movies);
            $moviesTopList.append($fragment);
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log('[ERROR]' + _context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

getMovieList(); // 시리즈 리스트 가져오는 함수

var getSeriesList = function getSeriesList() {
  var getSeries, _ref2, results;

  return regeneratorRuntime.async(function getSeriesList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/tv/popular?api_key=".concat(api_key, "&language=ko-KR&page=1&region=KR")));

        case 3:
          getSeries = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(getSeries.json());

        case 6:
          _ref2 = _context2.sent;
          results = _ref2.results;
          results.forEach(function (content) {
            var $li_series = document.createElement('li'); // 각각의 리스트 요소

            $li_series.id = content.id;
            var $a = document.createElement('a'); // 링크 생성

            $a.href = '#';
            var $img = document.createElement('img'); // 링크 내에 들어갈 이미지 생성

            if (content.poster_path == null) {
              $img.src = '../image/notready.png';
            } else {
              $img.src = "https://image.tmdb.org/t/p/w500/".concat(content.poster_path);
            }

            var textNode = document.createTextNode(content.name);
            $a.append($img); // 링크에 이미지 추가

            $a.append(textNode); // 링크에 영화 제목 추가

            $li_series.append($a); // 리스트에 해당 링크(이미지 + 제목) 추가

            $fragment.append($li_series); // 해당 리스트 묶음을 전달 개체에 추가

            $seriesTopList.append($fragment); // html에 전달 개체의 내용 추가
          });
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log('[ERROR]' + _context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

getSeriesList();