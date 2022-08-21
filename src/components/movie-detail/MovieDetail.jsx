import React from "react";
import YouTube from "react-youtube";
import Modal from "./../UI/Modal";
import { apiConfig } from "./../api/apiConfig";
import "./MovieDetail.css";

const opts = {
    height: "400",
    width: "100%",
    playerVars: {
        autoplay: 0,
    },
};
// Hien thi thong tin chi tiet cua bo phim
const MovieDetail = ({ movieData, trailer }) => {
    return (
        <Modal className="container_swap">
            <div className="left">
                <h2>{movieData.name || movieData.title}</h2>
                <hr />
                <h4>{`Release date : ${
                    movieData.first_air_date || movieData.release_date
                }`}</h4>
                <h4>{`Vote: ${movieData.vote_average}/10`}</h4>
                <p>{`${movieData.overview}`}</p>
            </div>
            <div className="right">
                {!trailer && (
                    <img
                        src={apiConfig.originalImage(movieData.backdrop_path)}
                        alt=""
                    />
                )}
                {trailer && <YouTube videoId={trailer.key} opts={opts} />}
            </div>
        </Modal>
    );
};

export default MovieDetail;
