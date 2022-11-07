
const axios = require('axios');
axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=28480f953401db60e553e41284f5f407&language=ko-KR&page=1`)
    .then(pvlist => {
        console.log(pvlist.data);
    });