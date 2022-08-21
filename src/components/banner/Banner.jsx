import React, { useEffect, useState } from "react";
import { requests } from "../api/apiConfig";
import NavBar from "../navbar/NavBar";
import "./Banner.css";

const Banner = () => {
    const [movie, setMovie] = useState([]);
    // Hien thi banner
    const item = (
        <div
            className="main__banner"
            style={{
                backgroundImage: `url( https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`,
            }}
        >
            <NavBar />
            <div className="banner">
                <h3>{movie.title || movie.name}</h3>
                <div className="btn">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p>{movie.overview}</p>
            </div>
        </div>
    );

    const fetchPopularMovieApi = async () => {
        try {
            const response = await fetch(requests.fetchNetflixOriginals);
            const data = await response.json();
            const filter =
                data.results[
                    Math.floor(Math.random() * data.results.length - 1) // lay ngau nhien mot bo phim trong array
                ];
            if (!filter.backdrop_path) return;
            setMovie(filter);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPopularMovieApi();
    }, []);

    return <div>{item}</div>;
};

export default Banner;
