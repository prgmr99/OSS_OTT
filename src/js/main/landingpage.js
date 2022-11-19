const api_key = '6c616e9a21c6e51d1191f6fc4f2d11c4';
const $search_form = document.querySelector('.search_form');
const $search_txt = document.querySelector('.search_txt');
const $result_contents = document.querySelector('.result_contents');
const $seriesList = document.querySelector('.seriesList');
const $movieList = document.querySelector('.movieList');
const $fragment = document.createDocumentFragment();

$search_form.onsubmit = e => {
    e.preventDefault();
    $result_contents.innerHTML = '';
    console.log($search_form.querySelector('input').value);
    render();
};

const render = async () => {
    try {
        const resContent = await fetch(          
            `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=ko-KR&query=${$search_txt.value}&page=1&include_adult=false&region=KR`
        );
        const { results } = await resContent.json();
        results.forEach(content => {
            const $li = document.createElement('li');
            $li.id = content.id;
            $li.className = content.media_type;
            const $a = document.createElement('a');
            $a.href = '#';
            const $img = document.createElement('img');
            if (content.poster_path == null) {
                $img.src =  '../image/notready.png';
            } else {
                $img.src = `https://image.tmdb.org/t/p/w500/${content.poster_path}`;
            }
            const textNode = document.createTextNode(content.title);
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