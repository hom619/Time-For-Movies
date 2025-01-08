/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {/* <button
          type="button"
          className="btn-close"
          aria-label="Close"
          
        > */}
        <button
          type="button"
          className="btn-close btn-close-white"
          aria-label="Close"
          onClick={() => props.setTrigger(false)}
        ></button>
        {/* <span className="closeBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </span> */}
        {/* </button> */}
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};
