import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Table from "../components/Table";

function Dashboard() {
  return (
    <div class="con-pt container">
      <h1>DASHBOARD</h1>
      <div class="input-group input-group-lg">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
        <div class="input-group-append">
          <span class="input-group-text main-color" id="inputGroup-sizing-lg">
            <i class="fa fa-search"></i>
          </span>
        </div>
      </div>
      <div style={{ marginTop: 50 }}>
        <Link to="/create">
          <button style={{ float: "right" }} class="btn main-color short-btn">
            New Market &nbsp;
            <i class="fa fa-plus"></i>
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
