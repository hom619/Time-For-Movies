/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          type="button"
          className="btn-close"
          onClick={() => props.setTrigger(false)}
        >
          <i className="bi bi-x"></i>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};
