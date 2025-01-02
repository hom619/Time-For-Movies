/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState, useRef } from "react";
import { fetchMovieFromApi } from "../Utils/axios";
import { randomChar } from "../Utils/random";
import { Pagination } from "./Pagination";

export const Test = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(1);
  const loadingState = useRef(true);
  useEffect(() => {
    if (loadingState.current) {
      fetchMovie(randomChar());
      loadingState.current = false;
    }
  }, []);
  const fetchMovie = async (str) => {
    const movie = await fetchMovieFromApi(str);
    setMoviesList(movie);
    // console.log(movie[0].poster_path);
  };
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesList.slice(indexOfFirstMovie, indexOfLastMovie);
  return (
    <div>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={moviesList.length}
      ></Pagination>
    </div>
  );
};
