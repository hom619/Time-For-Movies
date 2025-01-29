/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const MovieCarousel = (movieList) => {
  const dateFormat = (releaseDate) => {
    let formattedDate = moment(releaseDate).format("MMMM D Y");
    return formattedDate;
  };
  return (
    <div className="card">
      <div className="card-image">
        <Link to={`/movies/${movieList?.movieList?.id}`}>
          <img
            className="product--image"
            src={`https://image.tmdb.org/t/p/w500${movieList?.movieList?.poster_path}`}
            alt="product image"
          />
        </Link>
      </div>

      <div className="card-content">
        <h2>{movieList?.movieList?.title}</h2>
        <p>{dateFormat(movieList?.movieList?.release_date)}</p>
      </div>
    </div>
  );
};
