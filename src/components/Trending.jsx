/* eslint-disable no-unused-vars */
import { React, useRef, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import moment from "moment";

export const Trending = (trendingMovie) => {
  const dateFormat = (releaseDate) => {
    let formattedDate = moment(releaseDate).format("MMMM D Y");
    return formattedDate;
  };
  return (
    // <div className="trending-carousel">
    //   <Carousel responsive={responsive}>
    //     <div className="movie-cards">
    //       <div className="card">
    //         <div className="card-image">
    //           <img
    //             src={`https://image.tmdb.org/t/p/w500${trendingMovie?.trendingMovie?.poster_path}`}
    //             alt=""
    //           />
    //         </div>
    //         <h3>{trendingMovie?.trendingMovie?.original_title}</h3>
    //       </div>
    //     </div>
    //     ;
    //   </Carousel>
    // </div>
    <div className="card">
      <div className="card-image">
        <Link to={`/movies/${trendingMovie?.trendingMovie?.id}`}>
          <img
            className="product--image"
            src={`https://image.tmdb.org/t/p/w500${trendingMovie?.trendingMovie?.poster_path}`}
            alt="product image"
          />
        </Link>
      </div>

      <div className="card-content">
        <h2>{trendingMovie?.trendingMovie?.title}</h2>
        <p>{dateFormat(trendingMovie?.trendingMovie?.release_date)}</p>
      </div>
    </div>
  );
};
