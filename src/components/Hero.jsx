/* eslint-disable no-unused-vars */
import { React, useEffect, useRef, useState } from "react";
import { randomChar } from "../Utils/random";
import { fetchMovieFromApi } from "../Utils/axios";
import { Link } from "react-router-dom";
import { SearchPage } from "./SearchPage";
import { Pagination } from "./Pagination";
export const Hero = (addMoviesList) => {
  const [moviesList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);
  //   const [bgImage, setbgImage] = useState("");
  const loadingState = useRef(true);
  const searchRef = useRef("");
  const [searchState, setSearchState] = useState(true);
  useEffect(() => {
    if (loadingState.current) {
      fetchMovie(randomChar());
      loadingState.current = false;
    }
  }, []);
  const handleOnButtonSearch = () => {
    fetchMovie(searchRef.current.value);
    searchRef.current.value = "";
    addMoviesList(moviesList);
  };
  const fetchMovie = async (str) => {
    const movie = await fetchMovieFromApi(str);
    setMoviesList(movie);
    console.log(movie);
    setSearchState(false);
    // console.log(movie[0].poster_path);
  };
  // Get current Movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesList.slice(indexOfFirstMovie, indexOfLastMovie);

  //Change pages
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const movieStyle = {
    backgroundImage: `url(
        https://image.tmdb.org/t/p/w500${moviesList[0]?.poster_path}
      )`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
  };
  return (
    <div>
      <nav className="py-3 text-light fixed-top">
        <h2 className="container">Time for Movies</h2>
      </nav>
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
            {/* <Link to={"/searchPage"}></Link> */}
            <button
              className="searchButton rounded-pill"
              onClick={handleOnButtonSearch}
              type="button"
              id="button-search"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {!searchState && (
        <div className="movie-card-display mt-5">
          <SearchPage moviesList={currentMovies} />
          <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={moviesList.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};
