/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { Popup } from "./Popup";
import { fetchMovieDetailsFromApi, fetchMovieVideos } from "../Utils/axios";
import { React, useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

export const MovieCard = () => {
  const loadingState = useRef(true);
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [releaseYear, setReleaseYear] = useState("");
  useEffect(() => {
    if (loadingState.current) {
      fetchMovieDetails(id);
      getVideos(id);
      loadingState.current = false;
    }
  }, []);
  const getVideos = async (movieId) => {
    const movieVideos = await fetchMovieVideos(movieId);
    setVideos(movieVideos);
  };
  const fetchMovieDetails = async (movieId) => {
    const movieInfo = await fetchMovieDetailsFromApi(movieId);
    setMovieDetails(movieInfo);
    const release_date = new Date(`${movieInfo.release_date}`);
    const convertedYear = release_date.getFullYear();
    setReleaseYear(convertedYear);
    // console.log(movie[0].poster_path);
  };
  return (
    <div className="single_column">
      <section className="images">
        <div className="poster_wrapper">
          <div className="poster">
            <div className="image_content">
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="header_wrapper">
          <section className="header">
            <div className="title">
              <h2 className="movie_title">
                {movieDetails?.title}{" "}
                <span>
                  {"("}
                  {releaseYear}
                  {")"}
                </span>
              </h2>
              <div className="facts d-flex">
                <span className="release"> {movieDetails?.release_date}</span>
                <span className="runtime">{movieDetails?.runtime}</span>
              </div>
            </div>
            <div>
              <button onClick={() => setButtonPopup(true)}>Play Trailer</button>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <YouTube videoId={videos[0]?.key} />
              </Popup>
            </div>
            <div className="header_info"></div>
          </section>
        </div>
      </section>
    </div>
  );
};
