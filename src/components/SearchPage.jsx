/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMovieFromApi } from "../Utils/axios";
import { useParams } from "react-router-dom";
import { Pagination } from "./Pagination";

export const SearchPage = () => {
  const [searchState, setSearchState] = useState(true);
  const [moviesList, setMoviesList] = useState([]);
  const loadingState = useRef(true);
  const { query } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);
  useEffect(() => {
    if (loadingState.current) {
      fetchMovie(query);
      loadingState.current = false;
    }
  }, []);
  // Get current Movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesList?.slice(indexOfFirstMovie, indexOfLastMovie);

  //Change pages
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const fetchMovie = async (str) => {
    const movie = await fetchMovieFromApi(str);
    setMoviesList(movie);
    setSearchState(false);
    // console.log(movie[0].poster_path);
  };
  return (
    <div className="card-wrapper">
      {!searchState && (
        <div className="movie-card-display">
          <div className="card-container">
            {currentMovies &&
              currentMovies?.map((item, i) => (
                <div
                  className="row border rounded text-dark m-3 g-2 movie-card-display"
                  key={i}
                >
                  <div className="movie-card-image col-3">
                    <Link to={`/movies/${item.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-9">
                    <h3>{item?.title}</h3>
                    <p className="text-secondary">
                      IMDB Rating: {item?.vote_average}
                    </p>
                    <p>{item?.overview}</p>
                  </div>
                </div>
              ))}
          </div>
          <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={moviesList.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};
