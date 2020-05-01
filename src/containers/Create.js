import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ImageUploader from "react-images-upload";

function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [address, setAddress] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const imagesChangeHandler = (image) => {
    console.log("single", image);

    setImages(images.concat(image));
    console.log("all", images);
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const latitudeChangeHandler = (event) => {
    setLatitude(event.target.value);
  };

  const longitudeChangeHandler = (event) => {
    setLongitude(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newMarket = {
      name,
      description,
      category,
      images,
      address,
      latitude,
      longitude,
    };

    if (newMarket) {
      console.log("Ready to be submitted!");
      console.log(newMarket);
    }
  };

  return (
    <div style={{ paddingTop: 70 }} class="con-pt container">
      <h1>CREATE MARKET</h1>
      <form class="col-md-9" onSubmit={submitHandler}>
        <div class="form-group">
          <label for="exampleFormControlInput1">
            <b>Market Name</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder=""
            value={name}
            onChange={nameChangeHandler}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            <b>Market Description</b>
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={description}
            onChange={descriptionChangeHandler}
          ></textarea>
        </div>

        <div class="form-group">
          <label>
            <b>Food Category</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Bakery, Fruits and vegetables, Grains and legumes...."
            value={category}
            onChange={categoryChangeHandler}
          />
          <p>Enter each values seperated by a comma</p>
        </div>

        <div class="form-group">
          <label for="exampleFormControlFile1">
            <b>Images</b>
          </label>
          <br />
          <label for="exampleFormControlFile1">
            Select Up to three (3) Images
          </label>
          <ImageUploader
            fileContainerStyle={{ backgroundColor: "red" }}
            buttonStyles={{ justifyContent: "flex-start" }}
            withPreview={true}
            withIcon={false}
            buttonText="Choose images"
            onChange={imagesChangeHandler}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlFile1">
            <b>Geolocation/Address</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Address"
            value={address}
            onChange={addressChangeHandler}
          />
        </div>
        <div class="form-row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Latitude"
              value={latitude}
              onChange={latitudeChangeHandler}
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Longitude"
              value={longitude}
              onChange={longitudeChangeHandler}
            />
          </div>
        </div>

        <br />
        <br />
        <div class="form-group">
          <button class="btn main-color long-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Create);
