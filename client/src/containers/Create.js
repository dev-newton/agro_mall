import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ImageUploader from "react-images-upload";
import axios from "axios";

function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState({});
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
    // setImages(image[0]);
    setImages({ images: images.concat(image) });
    // const res = Object.entries(image);
    // res.map((obj) => {
    //   const key = obj[0];
    //   const value = obj[1];

    //   console.log(value);
    //   images.concat(value);
    //   setImages(images.concat(value));
    //   console.log(images);
    // });

    console.log("images", images);
    // console.log(1, image[0]);
    // console.log(2, image[1]);
    // console.log(2, images.concat(image[0]));
    // console.log("res", res[0]);
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

  const submitHandler = async (event) => {
    event.preventDefault();

    const files = images.images;

    files.map(async (image) => {
      const formData = new FormData();
      formData.append("image", image);
      try {
        const res = await axios.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const { fileName, filePath } = res.data;

        setUploadedImages({ fileName, filePath });
      } catch (error) {
        if (error.response.status === 500) {
          console.log("There was a problem with the server");
        } else {
          console.log("errrrr", error.response.data.msg);
        }
      }
    });

    console.log("formData-=====", files);
    // return;
    // const newMarket = {
    //   name,
    //   description,
    //   category,
    //   images,
    //   address,
    //   latitude,
    //   longitude,
    // };

    // if (newMarket) {
    //   console.log("Ready to be submitted!");
    //   console.log(newMarket);
    // }

    // try {
    //   const res = await axios.post("/upload", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   const { fileName, filePath } = res.data;

    //   setUploadedImages({ fileName, filePath });
    // } catch (error) {
    //   if (error.response.status === 500) {
    //     console.log("There was a problem with the server");
    //   } else {
    //     console.log("errrrr", error.response.data.msg);
    //   }
    // }
  };

  return (
    <div style={{ paddingTop: 70 }} className="con-pt container">
      <h1>CREATE MARKET</h1>
      <form className="col-md-9" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleformControlInput1">
            <b>Market Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleformControlInput1"
            placeholder=""
            value={name}
            onChange={nameChangeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleformControlTextarea1">
            <b>Market Description</b>
          </label>
          <textarea
            className="form-control"
            id="exampleformControlTextarea1"
            rows="3"
            value={description}
            onChange={descriptionChangeHandler}
          ></textarea>
        </div>

        <div className="form-group">
          <label>
            <b>Food Category</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleformControlInput1"
            placeholder="Bakery, Fruits and vegetables, Grains and legumes...."
            value={category}
            onChange={categoryChangeHandler}
          />
          <p>Enter each values seperated by a comma</p>
        </div>

        <div className="form-group">
          <label htmlFor="exampleformControlFile1">
            <b>Images</b>
          </label>
          <br />
          <label htmlFor="exampleformControlFile1">
            Select Up to three (3) Images
          </label>
          <ImageUploader
            withPreview={true}
            withIcon={false}
            buttonText="Choose images"
            onChange={imagesChangeHandler}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        </div>

        <img src="" alt="" />
        <div className="form-group">
          <label htmlFor="exampleformControlFile1">
            <b>Geolocation/Address</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleformControlInput1"
            placeholder="Address"
            value={address}
            onChange={addressChangeHandler}
          />
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Latitude"
              value={latitude}
              onChange={latitudeChangeHandler}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Longitude"
              value={longitude}
              onChange={longitudeChangeHandler}
            />
          </div>
        </div>

        <br />
        <br />
        <div className="form-group">
          <button className="btn main-color long-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Create);
