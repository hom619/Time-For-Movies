/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import { accessFromLocalStorage } from "../Utils/localdb";
import { MovieCarousel } from "./MovieCarousel";
import Carousel from "react-multi-carousel";
import { responsive } from "../Utils/carouselData";

export const MovieTypes = () => {
  useEffect(() => {
    setIsAllSelected(false);
    const movieListFromLocalDb = accessFromLocalStorage();
    if (movieListFromLocalDb?.length) {
      setAllDisplayList(movieListFromLocalDb);
      setMovieList(movieListFromLocalDb);
    }
  }, []);
  const [movieList, setMovieList] = useState([]);
  const [allDisplayList, setAllDisplayList] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(true);
  const [isRomanticSelected, setIsRomanticSelected] = useState(true);
  const [isActionSelected, setIsActionSelected] = useState(true);
  const [isComedySelected, setIsComedySelected] = useState(true);
  const [isHorrorSelected, setIsHorrorSelected] = useState(true);
  const [isDramaSelected, setIsDramaSelected] = useState(true);
  const handleOnFilteredList = (genre) => {
    return setMovieList(
      allDisplayList.filter(({ genres }) =>
        genres.some(({ name }) => name === genre)
      )
    );
  };
  const handleOnSelected = (e, genre) => {
    e.preventDefault();
    if (genre == "all") {
      setIsAllSelected(false);
      setIsActionSelected(true);
      setIsRomanticSelected(true);
      setIsComedySelected(true);
      return setMovieList(allDisplayList);
    } else if (genre == "Action") {
      setIsActionSelected(false);
      setIsRomanticSelected(true);
      setIsComedySelected(true);
      setIsAllSelected(true);
      handleOnFilteredList(genre);
    } else if (genre == "Comedy") {
      setIsRomanticSelected(true);
      setIsActionSelected(true);
      setIsAllSelected(true);
      setIsComedySelected(false);
      handleOnFilteredList(genre);
    } else if (genre == "Romance") {
      setIsRomanticSelected(false);
      setIsActionSelected(true);
      setIsAllSelected(true);
      setIsComedySelected(true);
      handleOnFilteredList(genre);
    } else if (genre == "Drama") {
      setIsRomanticSelected(true);
      setIsActionSelected(true);
      setIsAllSelected(true);
      setIsComedySelected(true);
      setIsHorrorSelected(true);
      setIsDramaSelected(false);
      handleOnFilteredList(genre);
    } else if (genre == "Horror") {
      setIsRomanticSelected(true);
      setIsActionSelected(true);
      setIsAllSelected(true);
      setIsComedySelected(true);
      setIsDramaSelected(true);
      setIsHorrorSelected(false);
      handleOnFilteredList(genre);
    }
  };
  return (
    <div>
      <div className="column_header mb-2">
        <h2>Favourites</h2>
        <div className="selector_wrap">
          <div className="selector">
            <div
              className={`selector_anchor ${!isAllSelected ? "selected" : ""}`}
            >
              <h3>
                <a onClick={(event) => handleOnSelected(event, "all")} href="#">
                  All
                </a>
              </h3>
              <div className={!isAllSelected ? "background" : ""}></div>
            </div>

            <div
              className={`selector_anchor ${
                !isRomanticSelected ? "selected" : ""
              }`}
            >
              <h3>
                <a
                  onClick={(event) => handleOnSelected(event, "Romance")}
                  href="#"
                >
                  Romance
                </a>
              </h3>
              <div className={!isRomanticSelected ? "background" : ""}></div>
            </div>
            <div
              className={`selector_anchor ${
                !isActionSelected ? "selected" : ""
              }`}
            >
              <h3>
                <a
                  onClick={(event) => handleOnSelected(event, "Action")}
                  href="#"
                >
                  Action
                </a>
              </h3>
              <div className={!isActionSelected ? "background" : ""}></div>
            </div>
            <div
              className={`selector_anchor ${
                !isComedySelected ? "selected" : ""
              }`}
            >
              <h3>
                <a
                  onClick={(event) => handleOnSelected(event, "Comedy")}
                  href="#"
                >
                  Comedy
                </a>
              </h3>
              <div className={!isComedySelected ? "background" : ""}></div>
            </div>
            <div
              className={`selector_anchor ${
                !isDramaSelected ? "selected" : ""
              }`}
            >
              <h3>
                <a
                  onClick={(event) => handleOnSelected(event, "Drama")}
                  href="#"
                >
                  Drama
                </a>
              </h3>
              <div className={!isDramaSelected ? "background" : ""}></div>
            </div>
            <div
              className={`selector_anchor ${
                !isHorrorSelected ? "selected" : ""
              }`}
            >
              <h3>
                <a
                  onClick={(event) => handleOnSelected(event, "Horror")}
                  href="#"
                >
                  Horror
                </a>
              </h3>
              <div className={!isHorrorSelected ? "background" : ""}></div>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        customTransition="all .5"
        transitionDuration={1000}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        responsive={responsive}
      >
        {movieList.length > 0 &&
          movieList.map((item, i) => (
            <MovieCarousel key={i} movieList={item} />
          ))}
      </Carousel>
    </div>
  );
};
