let page = 1;
const key = '28480f953401db60e553e41284f5f407';
let output = '';

getData = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + key + '&language=ko-KR&page=' + page;
    const {
        data: {
            results
        },
    } = await axios.get(url); console.log(results);
    for(var i = 0;i<results.length;i++) {
        output = output+'results[i].title';
    }
}