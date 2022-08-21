// Lay du lieu tu API

export const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3",
    API_KEY: "39ae7dad1e297b57266733db349aa085",
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export const requests = {
    fetchTrending: `${apiConfig.baseUrl}/trending/all/week?api_key=${apiConfig.API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${apiConfig.baseUrl}/discover/tv?api_key=${apiConfig.API_KEY}&with_network=123`,
    fetchTopRated: `${apiConfig.baseUrl}/movie/top_rated?api_key=${apiConfig.API_KEY}&language=en-US`,
    fetchActionMovies: `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.API_KEY}&with_genres=28`,
    fetchComedyMovies: `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.API_KEY}&with_genres=99`,
    fetchSearch: `${apiConfig.baseUrl}/search/movie?api_key=${apiConfig.API_KEY}&language=en-US`,
};
