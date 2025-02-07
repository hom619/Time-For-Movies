/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { Popup } from "./Popup";
import { fetchMovieDetailsFromApi, fetchMovieVideos } from "../Utils/axios";
import { React, useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";
import { storeInLocalStorage, accessFromLocalStorage } from "../Utils/localdb";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";

export const DisplayPage = () => {
  const loadingState = useRef(true);
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [releaseYear, setReleaseYear] = useState("");
  const [movieDetailsList, setMovieDetailsList] = useState([]);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 550px)");
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [showLabel, setShowLabel] = useState(false);
  useEffect(() => {
    if (loadingState.current) {
      fetchMovieDetails(id);
      getVideos(id);
      const movieListFromLocalDb = accessFromLocalStorage();
      movieListFromLocalDb?.length && setMovieDetailsList(movieListFromLocalDb);
    }
  }, []);
  const getVideos = async (movieId) => {
    const movieVideos = await fetchMovieVideos(movieId);
    setVideos(movieVideos);
  };
  const handleOnFavouriteList = () => {
    // navigate("/", { state: { movieDetails: movieDetails } });
    const filteredMovieList = movieDetailsList.filter(
      (item) => item.id !== movieDetails.id
    );
    setMovieDetailsList(...filteredMovieList, movieDetails);
    storeInLocalStorage([...filteredMovieList, movieDetails]);
    alert("Movie has been added to favourites");
    console.log(movieDetailsList);
  };
  const fetchMovieDetails = async (movieId) => {
    const movieInfo = await fetchMovieDetailsFromApi(movieId);
    setMovieDetails(movieInfo);
    const release_date = new Date(`${movieInfo.release_date}`);
    const convertedYear = release_date.getFullYear();
    setReleaseYear(convertedYear);
    // console.log(movie[0].poster_path);
  };
  const movieStyle = {
    backgroundImage: `url(
        https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}
      )`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const mobileScreens = {
    height: "250", // Adjust as needed

    width: "400",
  };
  const largerScreen = {
    height: "360", // Adjust as needed

    width: "640",
  };

  const timeConvert = (time) => {
    const hours = time / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours > 0 ? rhours + "h" + " " + rminutes + "m" : rminutes + "m";
  };
  const handleOnButtonHover = (e) => {
    if (e === "over") {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  };
  return (
    <div className="movie-wrapper">
      <div className="wrapper-container" style={movieStyle}>
        <div className="movie-poster">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
            alt=""
          />
        </div>
        <div className="movie-info">
          <div className="movie-info-header">
            <div className="movie-title text-white">
              <h2 className="movie-name">
                {movieDetails?.original_title} <span>({releaseYear})</span>
              </h2>
              <div className="movie-facts">
                <span className="certification">M</span>
                <span className="release">
                  <i className="bi bi-dot"></i>
                  {movieDetails?.release_date}({movieDetails?.origin_country})
                </span>

                {movieDetails?.genres?.map((genre) => {
                  return (
                    <span className="genres" key={genre.id}>
                      <i className="bi bi-dot"></i>
                      {genre.name}
                    </span>
                  );
                })}

                <span className="runtime">
                  <i className="bi bi-dot"></i>
                  {timeConvert(movieDetails?.runtime)}
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <ul className="movie-actions">
              <li className="favourites">
                <i
                  className="bi bi-bookmark-fill"
                  style={{ color: "white" }}
                ></i>
              </li>

              <li className="watchList">
                <i
                  onMouseOver={() => handleOnButtonHover("over")}
                  onMouseOut={() => handleOnButtonHover("out")}
                  onClick={handleOnFavouriteList}
                  className="bi bi-heart-fill"
                  style={{ color: "white" }}
                ></i>
                {showLabel && (
                  <label className="text-white" style={{ width: "150px" }}>
                    Add to Favourites
                  </label>
                )}
              </li>
              <li className="playVideo" style={{ all: "revert" }}>
                <button onClick={() => setButtonPopup(true)}>
                  <i
                    className="bi bi-play-circle-fill"
                    style={{ marginRight: "8px" }}
                  ></i>
                  <span>Play Trailer</span>
                </button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <YouTube
                    opts={isMobile ? mobileScreens : largerScreen}
                    videoId={videos[0]?.key}
                  />
                </Popup>
              </li>
            </ul>
          </div>
          <div className="movie-overview text-white">
            <h3>Overview</h3>
            <div className="overview">
              <p>
                {isTablet && movieDetails?.overview?.length > 80
                  ? movieDetails?.overview?.slice(0, 450) + "..."
                  : movieDetails?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
