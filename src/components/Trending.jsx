/* eslint-disable no-unused-vars */
import { React, useRef, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import { MovieCarousel } from "./MovieCarousel";

export const Trending = (trendingMovie) => {
  return <MovieCarousel movieList={trendingMovie}></MovieCarousel>;
};
