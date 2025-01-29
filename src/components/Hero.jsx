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
export const Hero = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);

  //   const [bgImage, setbgImage] = useState("");
  // const { state } = useLocation();
  // const { id } = state;
  const loadingState = useRef(true);
  const searchRef = useRef("");
  const [searchState, setSearchState] = useState(true);
  const navigate = useNavigate();
  const [favouritesList, setFavouritesList] = useState([]);
  useEffect(() => {
    if (loadingState.current) {
      // fetchMovie(randomChar());
      fetchTrendingMovie();
      loadingState.current = false;
    }
  }, []);
  const handleOnButtonSearch = () => {
    navigate(`/search/${searchRef.current.value}`);
    searchRef.current.value = "";
  };
  const fetchTrendingMovie = async () => {
    const movie = await fetchTrendingMovieFromApi();
    setTrendingMoviesList(movie);
    setSearchState(false);
  };

  const movieStyle = {
    backgroundImage: `url(
        https://image.tmdb.org/t/p/w500${trendingMoviesList[0]?.poster_path}
      )`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
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
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          responsive={responsive}
        >
          {trendingMoviesList.length > 0 &&
            trendingMoviesList.map((item, i) => (
              <MovieCarousel key={i} movieList={item} />
            ))}
        </Carousel>
      </div>
      <div className="selection">
        <MovieTypes></MovieTypes>
      </div>
    </div>
  );
};
