import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/">
        <h3>
          <b>AgroMall</b>
        </h3>
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active"></li>
        </ul>
      </div>
    </nav>
  );
}
