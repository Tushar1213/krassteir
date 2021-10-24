import React from "react";
import pic1 from "../Images/pic1.jpg";
import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";
export default function Carousel() {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={pic1} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={pic2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={pic3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
