import axios from 'axios';

const apiKey = '46ce9ed4c1328f252f1df01a5aab79d7';
const discoverMovieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`

axios.get(discoverMovieURL).then((response) => {
    const movieTitlesandOverview = response.data.results.map((movie: any) => ({
        title: movie.title,
        overview: movie.overview
    }))
    console.log(movieTitlesandOverview)
})

console.log('Hello world') //this console log will be completed before get