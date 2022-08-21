import React from "react";
import MovieResult from "./MovieResult";
import "./ResultList.css";
// Hien thi ket qua tim kiem phim dua tren danh sach movie da fetch
const ResultList = ({ movies }) => {
    return (
        <React.Fragment>
            <h3>Search Result</h3>
            <div className="movies">
                {movies.map((movie) => (
                    <div key={movie.id} className="result-list">
                        {movie.poster_path && <MovieResult movie={movie} />}
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default ResultList;
