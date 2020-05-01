import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div class="container col-md-4" style={{ paddingTop: 200 }}>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <Link to="/dashboard">
            <button
              style={{
                backgroundColor: "#43a047",
                border: "none",
                width: "100%",
              }}
              type="submit"
              class="btn btn-primary"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
