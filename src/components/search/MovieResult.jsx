import React, { useState, useRef } from "react";
import MovieDetail from "./../movie-detail/MovieDetail";
import { apiConfig } from "./../api/apiConfig";

const Movie = ({ movie }) => {
    const img = apiConfig.w500Image(movie.poster_path);
    // Set initial state cho moi bo phim truoc khi duoc click
    // Khi click vao anh, render component MovieDetail
    const [showMovieDetail, setShowMovieDetail] = useState(false);
    const [imgCurrent, setImgCurrent] = useState("");
    const imgRef = useRef();
    const [trailer, setTrailer] = useState([]);

    const handleFetchTrailerMovieApi = async (movie) => {
        setImgCurrent((prevImg) => {
            if (imgRef.current === prevImg) {
                return "";
            } else {
                return imgRef.current;
            }
        });

        imgRef.current !== "" && setShowMovieDetail(true);

        try {
            const response = await fetch(
                `https://api.themoviedb.org//3/movie/${movie.id}/videos?api_key=${apiConfig.API_KEY}`
            );

            const data = await response.json();

            if (!data.success) {
                setTrailer(false);
            }

            const trailer = data.results.find(
                (vid) =>
                    vid.site === "Youtube" &&
                    (vid.type === "Trailer" || vid.type === "Teaser")
            );

            setTrailer(trailer ? trailer : data.results[0]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <React.Fragment>
            <img
                ref={imgRef}
                onClick={() => handleFetchTrailerMovieApi(movie)}
                src={img}
                alt=""
            />
            {showMovieDetail && imgCurrent && (
                <MovieDetail movieData={movie} trailer={trailer} />
            )}
        </React.Fragment>
    );
};

export default Movie;
