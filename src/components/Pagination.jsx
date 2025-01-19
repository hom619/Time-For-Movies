/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export const Pagination = ({
  moviesPerPage,
  totalMovies,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <div className="pagination-wrapper">
      <nav className="bg-transparent">
        <ul className="pagination">
          <li className="previous_page">
            <a
              href="#"
              onClick={() =>
                currentPage > 1
                  ? paginate(currentPage - 1)
                  : paginate(currentPage)
              }
              className="page-link"
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((number) => {
            return (
              <li key={number} className="page-item">
                <a
                  href="#"
                  onClick={() => paginate(number)}
                  className={number == currentPage ? "active" : "page-link"}
                >
                  {number}
                </a>
              </li>
            );
          })}
          <li className="next_page ml-2">
            <a
              href="#"
              onClick={() =>
                currentPage < Math.ceil(totalMovies / moviesPerPage)
                  ? paginate(currentPage + 1)
                  : paginate(currentPage)
              }
              className="page-link"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
