/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";

export const SearchPage = ({ moviesList }) => {
  return (
    <div className="container">
      <div className="">
        {moviesList &&
          moviesList?.map((item, i) => (
            <div
              className="row border rounded text-dark m-3 g-2 movie-card-display"
              key={i}
            >
              <div className="col-md">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                  alt=""
                />
              </div>
              <div className="col-md">
                <h3>{item?.title}</h3>
                <p>IMDB Rating: {item?.vote_average}</p>
                <p>{item?.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
