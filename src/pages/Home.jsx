/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import doomguy from "../assets/images/doomguy-bg.webp";
import supermariogalaxy from "../assets/images/supermariogalaxy-bg.webp";
import Auth from "../utils/authUtil";

const Home = ({ isLoggedIn }) => {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      <article className="container">
        {/* Card Component */}
        <div id="card-bg" className="card card-body">
          {/* Carousel Component */}
          <Carousel className="carousel-container mt-4" interval={3000}>
            <Carousel.Item>
              <div className="carousel-inner">
                <img
                  src={supermariogalaxy}
                  className="homepage-carousel-image card-img-top col-md-6 float-md-end mb-3 ms-md-3"
                  alt="Super Mario Galaxy"
                />
                <h5 className="card-title">Super Mario Galaxy</h5>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-inner">
                <img
                  src={doomguy}
                  className="homepage-carousel-image card-img-top col-md-6 float-md-end mb-3 ms-md-3"
                  alt="DoomDude"
                />
                <h5 className="card-title">Doom Guy</h5>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <br />
        <footer>
          <br />
          <div id="B">
            <br />{" "}
            <Link to="/signup" id="B" className="btn btn-primary">
              Sign-up
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
};

export default Home;

/** */
/* <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={doomguy} className="d-block w-100" alt="..." />
                <h4>Some text for the carousel</h4>
              </div>
              <div class="carousel-item">
                <img src={okage} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={supermariogalaxy} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> */
