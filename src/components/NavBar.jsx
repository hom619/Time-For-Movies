/* eslint-disable no-unused-vars */
import React from "react";
import { Hero } from "./Hero";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="py-3 text-light fixed-top">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <h2 className="container">Time for Movies</h2>
        </Link>
      </nav>
    </div>
  );
};
