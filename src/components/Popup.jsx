/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          type="button"
          className="btn-close btn-close-white"
          aria-label="Close"
          onClick={() => props.setTrigger(false)}
        ></button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};
