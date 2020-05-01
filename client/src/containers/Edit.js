import React from "react";
import { Link } from "react-router-dom";

export default function Edit() {
  return (
    <div style={{ paddingTop: 100 }} class="con-pt container">
      <h1>EDIT MARKET</h1>
      <form class="col-md-9">
        <div class="form-group">
          <label for="exampleFormControlInput1">Market Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder=""
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Market Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">Food Category</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div class="form-group">
          <label for="exampleFormControlFile1">
            Select Up to three (3) Images
          </label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlFile1">Geolocation/Address</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Address"
          />
        </div>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Latitude" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Longitude" />
          </div>
        </div>

        <br />
        <br />
        <div class="form-group">
          <Link to="/dashboard">
            <button class="btn main-color long-btn" type="submit">
              Update
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
