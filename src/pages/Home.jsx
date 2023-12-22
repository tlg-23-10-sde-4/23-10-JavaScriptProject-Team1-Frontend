
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import { useState } from "react";

import { Carousel } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";
import { Link } from "react-router-dom";
import doomguy from "../assets/images/doomguy-bg.webp";
import supermariogalaxy from "../assets/images/supermariogalaxy-bg.webp";
import Auth from "../utils/authUtil";


const Home = ({ isLoggedIn }) => {

 

function Home() {
  const [init, setInit] = useState(false);
  const userId = Auth.getUserId();
  const isLoggedIn = Auth.isLoggedIn();


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

