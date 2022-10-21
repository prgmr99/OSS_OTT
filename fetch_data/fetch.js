const axios = require('axios');
axios.get(`https://api.themoviedb.org/3/watch/providers/movie?api_key=6c616e9a21c6e51d1191f6fc4f2d11c4&language=ko-KR`)
    .then(pvlist => {
        console.log(pvlist.data);
    });
    