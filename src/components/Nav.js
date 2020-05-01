import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      style={{ backgroundColor: "#43a047" }}
      class="navbar navbar-expand-lg navbar-dark"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <Link class="navbar-brand" to="/">
        <h3>
          <b>AgroMall</b>
        </h3>
      </Link>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active"></li>
        </ul>
      </div>
    </nav>
  );
}
