//import { obj_user } from "./signIn";

const api_key = '6c616e9a21c6e51d1191f6fc4f2d11c4';
const $search_form = document.querySelector('.search_form');
const $search_txt = document.querySelector('.search_txt');
const $result_contents = document.querySelector('.result_contents');
const $seriesList = document.querySelector('.seriesList');
const $movieList = document.querySelector('.movieList');
const $fragment = document.createDocumentFragment();
const signInBtn = document.querySelector('#signInBtn');
//console.log(email);
let obj = JSON.parse(localStorage.getItem('obj_user'));
console.log(obj);
//console.log(obj.user);

$search_form.onsubmit = e => {
    e.preventDefault();
    $result_contents.innerHTML = '';
    //console.log($search_form.querySelector('input').value);
    render();
};

const render = async () => {
    try {
        const resContent = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=ko-KR&query=${$search_txt.value}&page=1&include_adult=false&region=KR`
        );
        const {
            results
        } = await resContent.json();
        //console.log($search_txt.value);

        const bmBtn = document.querySelector("#bookMarkBtn");
        bmBtn.addEventListener('click', () => {
            let mvList = JSON.parse(localStorage.getItem('obj_user'));
            (mvList.mv).push($search_txt.value);
            localStorage.setItem('obj_user', JSON.stringify(mvList));
        })
        results.forEach(content => {
            const $li = document.createElement('li');
            $li.id = content.id;
            $li.className = content.media_type;
            const $a = document.createElement('a');
            $a.href = '#';
            const $img = document.createElement('img');
            if (content.poster_path == null) {
                $img.src = '../image/notready.png';
            } else {
                $img.src = `https://image.tmdb.org/t/p/w200/${content.poster_path}`;
            }
            var textNode;
            if (content.media_type === 'movie') {
                textNode = document.createTextNode(content.title);
            }
            else if (content.media_type === 'tv') {
                textNode = document.createTextNode(content.name);
            }
            $a.append($img);
            $a.append(textNode);
            $li.append($a);
            $fragment.append($li);
            $result_contents.append($fragment);
        });
    } catch (err) {
        console.log('[ERROR]' + err);
    }
};