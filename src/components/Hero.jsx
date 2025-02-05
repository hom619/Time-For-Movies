/* eslint-disable no-unused-vars */
import { React, useEffect, useRef, useState } from "react";
import { randomChar } from "../Utils/random";
import { fetchMovieFromApi, fetchTrendingMovieFromApi } from "../Utils/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SearchPage } from "./SearchPage";
import Carousel from "react-multi-carousel";
import { responsive } from "../Utils/carouselData";
import { MovieTypes } from "./MovieTypes";
import { MovieCarousel } from "./MovieCarousel";
import { accessFromLocalStorage, storeInLocalStorage } from "../Utils/localdb";
export const Hero = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const loadingState = useRef(true);
  const searchRef = useRef("");
  const [favouriteState, setFavouriteState] = useState(true);
  const navigate = useNavigate();
  const [favouritesList, setFavouritesList] = useState([]);
  const deleteState = useRef(true);
  useEffect(() => {
    if (loadingState.current) {
      // fetchMovie(randomChar());
      fetchTrendingMovie();
      const movieListFromLocalDb = accessFromLocalStorage();
      if (movieListFromLocalDb?.length) {
        setFavouritesList(movieListFromLocalDb);
      }
      loadingState.current = false;
      setFavouriteState(false);
    }
  }, []);
  const handleOnMoviesDelete = (movieId) => {
    confirm("Are you sure you want to delete the movie?") &&
      setFavouritesList(favouritesList.filter((movie) => movie.id !== movieId));
    storeInLocalStorage(favouritesList.filter((movie) => movie.id !== movieId));
  };
  const handleOnButtonSearch = () => {
    if (searchRef.current.value != "") {
      navigate(`/search/${searchRef.current.value}`);
      searchRef.current.value = "";
    } else {
      alert("Please insert some value to search");
    }
  };
  const fetchTrendingMovie = async () => {
    const movie = await fetchTrendingMovieFromApi();
    setTrendingMoviesList(movie);
  };

  const movieStyle = {
    backgroundImage: `url(
        https://image.tmdb.org/t/p/w500${trendingMoviesList[0]?.poster_path}
      )`,
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div
        className="hero d-flex justify-content-center align-items-center text-light"
        style={movieStyle}
      >
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center">
              <h1>Namaste.</h1>
              <h2> Its time for movies. Explore millions of movies</h2>
            </div>
          </div>
          <div className="input-group my-3">
            <input
              ref={searchRef}
              type="text"
              className="form-control"
              placeholder="Search for a movie"
              style={{ boxShadow: "none" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleOnButtonSearch();
              }}
            />
            <button
              className="searchButton rounded-pill"
              type="button"
              id="button-search"
              onClick={handleOnButtonSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="trending">
        <h2>Trending</h2>
        <Carousel
          customTransition="all .5"
          transitionDuration={1000}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          responsive={responsive}
        >
          {trendingMoviesList.length > 0 &&
            trendingMoviesList.map((item, i) => (
              <MovieCarousel key={i} movieList={item} deleteState={false} />
            ))}
        </Carousel>
      </div>
      <hr className="border-3"></hr>
      {!favouriteState && (
        <div className="selection">
          <MovieTypes
            favouritesList={favouritesList}
            handleOnMoviesDelete={handleOnMoviesDelete}
            deleteState={true}
          ></MovieTypes>
        </div>
      )}
    </div>
  );
};
