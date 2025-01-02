/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <div className="pagination-wrapper">
      <nav className="bg-transparent">
        <ul className="pagination">
          {pageNumbers.map((number) => {
            return (
              <li key={number} className="page-item">
                <a
                  href="#"
                  onClick={() => paginate(number)}
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
