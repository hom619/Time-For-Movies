/* eslint-disable no-unused-vars */
import React from "react";
import { Hero } from "./Hero";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="navBar py-3 text-light fixed-top d-flex">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <img src="src\assets\logo.2.png"></img>
        </Link>
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <h2>Time for Movies</h2>
        </Link>
      </nav>
    </div>
  );
};
