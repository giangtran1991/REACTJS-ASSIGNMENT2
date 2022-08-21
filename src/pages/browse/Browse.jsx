import React from "react";
import Banner from "../../components/banner/Banner";
import MovieList from "../../components/movie-list/MovieList";
import { requests } from "../../components/api/apiConfig";
import "./Browse.css";
// Hien thi trang chu
function Browse() {
    return (
        <div className="app">
            <Banner />
            <MovieList title="Originals" url={requests.fetchNetflixOriginals} />
            <MovieList title="Trending Movies" url={requests.fetchTrending} />
            <MovieList title="Top Rated Movies" url={requests.fetchTopRated} />
            <MovieList title="Action Movies" url={requests.fetchActionMovies} />
            <MovieList title="Horror Movies" url={requests.fetchHorrorMovies} />
            <MovieList
                title="Romance Movies"
                url={requests.fetchRomanceMovies}
            />
            <MovieList
                title="Documentaries"
                url={requests.fetchDocumentaries}
            />
        </div>
    );
}

export default Browse;
