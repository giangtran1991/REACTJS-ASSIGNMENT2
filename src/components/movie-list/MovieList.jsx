import React, { useState, useEffect, useRef } from "react";
import { requests } from "../api/apiConfig";
import { smoothHorizontalScrolling } from "../utility";
import Movie from "./Movie";
import "./MovieList.css";
// Hien thi danh sach phim theo danh muc
const MovieList = ({ url, title }) => {
    const [movies, setMovies] = useState([]);
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const sliderRef = useRef();
    const movieRef = useRef();

    const movieListClasses = `movie-list ${
        url === requests.fetchNetflixOriginals ? "poster-path" : "backdrop-path"
    }`;

    const movieSliderClasses = ` ${
        url === requests.fetchNetflixOriginals
            ? "moviesSlider-poster-path"
            : "moviesSlider-backdrop-path"
    }`;

    useEffect(() => {
        const fetchMovieApi = async () => {
            try {
                const response = await fetch(url);

                const data = await response.json();

                setMovies(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieApi(); // Lay du lieu phim theo danh muc
    }, [url]);
    // Tao hieu ung keo sang ngang va co animation khi hover vao anh
    const handleScrollRight = () => {
        const maxScrollLeft =
            sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            smoothHorizontalScrolling(
                sliderRef.current,
                250,
                movieRef.current.clientWidth * 4,
                sliderRef.current.scrollLeft
            );
        }
    };

    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            smoothHorizontalScrolling(
                sliderRef.current,
                250,
                -movieRef.current.clientWidth * 4,
                sliderRef.current.scrollLeft
            );
        }
    };

    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) {
                handleScrollRight();
            }
            if (dragMove > dragDown) {
                handleScrollLeft();
            }
        }
    }, [dragDown, dragMove, isDrag]);

    const onDragStart = (e) => {
        setIsDrag(true);
        setDragDown(e.screenX);
    };

    const onDragEnd = (e) => {
        setIsDrag(false);
    };

    const onDragEnter = (e) => {
        setDragMove(e.screenX);
    };

    return (
        <React.Fragment>
            <h3>{title}</h3>
            <div className="moviesRowContainer" draggable="false">
                <div
                    className={movieSliderClasses}
                    ref={sliderRef}
                    draggable="true"
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                    onDragEnter={onDragEnter}
                >
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className={movieListClasses}
                            ref={movieRef}
                            draggable="false"
                        >
                            <Movie url={url} movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default MovieList;
