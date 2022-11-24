"use strict";

var _signIn = require("../js/signIn.js");

var api_key = '6c616e9a21c6e51d1191f6fc4f2d11c4';
var $search_form = document.querySelector('.search_form');
var $search_txt = document.querySelector('.search_txt');
var $result_contents = document.querySelector('.result_contents');
var $seriesList = document.querySelector('.seriesList');
var $movieList = document.querySelector('.movieList');
var $fragment = document.createDocumentFragment();
var signInBtn = document.querySelector('#signInBtn');
console.log(_signIn.email);

$search_form.onsubmit = function (e) {
  e.preventDefault();
  $result_contents.innerHTML = '';
  console.log($search_form.querySelector('input').value);
  render();
};

var getMovieList = function getMovieList() {
  var getMovie, _ref, results;

  return regeneratorRuntime.async(function getMovieList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(api_key, "&language=ko-KR&page=1")));

        case 3:
          getMovie = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(getMovie.json());

        case 6:
          _ref = _context.sent;
          results = _ref.results;
          results.forEach(function (content) {
            var $li_series = document.createElement('li_series');
            $li_series.id = content.id;
            $li_series.className = content.media_type;
            var $a = document.createElement('a');
            $a.href = '#';
            var $img = document.createElement('img');

            if (content.poster_path == null) {
              $img.src = '../image/notready.png';
            } else {
              $img.src = "https://image.tmdb.org/t/p/w500/".concat(content.poster_path);
            }

            var textNode = document.createTextNode(content.title);
            $a.append($img);
            $a.append(textNode);
            $li_series.append($a);
            $fragment.append($li_series);
            $result_contents.append($fragment);
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

getMovieList();

var getSeriesList = function getSeriesList() {
  var getSeries, _ref2, results;

  return regeneratorRuntime.async(function getSeriesList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/tv/popular?api_key=".concat(api_key, "&language=ko-KR&page=1")));

        case 3:
          getSeries = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(getSeries.json());

        case 6:
          _ref2 = _context2.sent;
          results = _ref2.results;
          results.forEach(function (content) {
            var $li = document.createElement('li');
            $li.id = content.id;
            $li.className = content.media_type;
            var $a = document.createElement('a');
            $a.href = '#';
            var $img = document.createElement('img');

            if (content.poster_path == null) {
              $img.src = '../image/notready.png';
            } else {
              $img.src = "https://image.tmdb.org/t/p/w500/".concat(content.poster_path);
            }

            var textNode = document.createTextNode(content.title);
            $a.append($img);
            $a.append(textNode);
            $li.append($a);
            $fragment.append($li);
            $result_contents.append($fragment);
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

var render = function render() {
  var resContent, _ref3, results, movieString;

  return regeneratorRuntime.async(function render$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat(api_key, "&language=ko-KR&query=").concat($search_txt.value, "&page=1&include_adult=false&region=KR")));

        case 3:
          resContent = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(resContent.json());

        case 6:
          _ref3 = _context3.sent;
          results = _ref3.results;

          _signIn.movies.push($search_txt.value);

          movieString = JSON.stringify(_signIn.movies);
          localStorage.setItem(_signIn.movies, movieString); //localStorage.getItem(obj_user);
          //console.log(obj_user);

          results.forEach(function (content) {
            var $li = document.createElement('li');
            $li.id = content.id;
            $li.className = content.media_type;
            var $a = document.createElement('a');
            $a.href = '#';
            var $img = document.createElement('img');

            if (content.poster_path == null) {
              $img.src = '../image/notready.png';
            } else {
              $img.src = "https://image.tmdb.org/t/p/w500/".concat(content.poster_path);
            }

            var textNode = document.createTextNode(content.title);
            $a.append($img);
            $a.append(textNode);
            $li.append($a);
            $fragment.append($li);
            $result_contents.append($fragment);
          });
          _context3.next = 17;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.log('[ERROR]' + _context3.t0);

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 14]]);
};