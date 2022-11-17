"use strict";

var api_key = '6c616e9a21c6e51d1191f6fc4f2d11c4';
var $search_form = document.querySelector('.search_form');
var $search_txt = document.querySelector('.search_txt');
var $result_contents = document.querySelector('.result_contents');
var $seriesList = document.querySelector('.seriesList');
var $movieList = document.querySelector('.movieList');
var $fragment = document.createDocumentFragment();

$search_form.onsubmit = function (e) {
  e.preventDefault();
  $result_contents.innerHTML = '';
  console.log($search_form.querySelector('input').value);
  render();
};

var render = function render() {
  var resContent, _ref, results;

  return regeneratorRuntime.async(function render$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat(api_key, "&language=ko-KR&query=").concat($search_txt.value, "&page=1&include_adult=false&region=KR")));

        case 3:
          resContent = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(resContent.json());

        case 6:
          _ref = _context.sent;
          results = _ref.results;
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