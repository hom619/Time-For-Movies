import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="copyRight">&copy; Created by Hom Gurung 🙏</div>
      <h2>Time for Movies</h2>
      <div className="connect">
        <div className="linkedIn">
          <a
            href="https://www.linkedin.com/in/homgurung/"
            target="_blank"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            LinkedIn <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <div className="github">
          <a
            href="https://github.com/hom619"
            target="_blank"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Github <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
