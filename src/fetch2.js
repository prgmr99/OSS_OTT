import { API_URL, API_KEY } from "./Components/Config";

const movieVar = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

fetch(movieVar).then(response => response.json()).then(response => console.log(response));
