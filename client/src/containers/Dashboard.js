import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Table from "../components/Table";

function Dashboard() {
  return (
    <div className="con-pt container">
      <h1>DASHBOARD</h1>
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
        <div className="input-group-append">
          <span
            className="input-group-text main-color"
            id="inputGroup-sizing-lg"
          >
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
      <div style={{ marginTop: 50 }}>
        <Link to="/create">
          <button
            style={{ float: "right" }}
            className="btn main-color short-btn"
          >
            New Market &nbsp;
            <i className="fa fa-plus"></i>
          </button>
        </Link>
        <br />
        <br />
        <Table />
      </div>
    </div>
  );
}

export default withRouter(Dashboard);
