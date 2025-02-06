/* eslint-disable no-unused-vars */
import React from "react";
import { Hero } from "./Hero";
import { Link } from "react-router-dom";
import logo from "../../public/Images/logo.png";

export const NavBar = () => {
  return (
    <div>
      <nav className="navBar py-3 text-light fixed-top d-flex">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <img src={logo} alt="Movie Time"></img>
        </Link>
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <h2>Time for Movies</h2>
        </Link>
      </nav>
    </div>
  );
};
