import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="Navbar" id="Navbar-component-main">
        <nav className="navbar sticky-top bg-body-tertiary">
          <div className="container-fluid">
            <div className="wave"></div>

            <span className="navbar-brand mb-0 h1">
              <h1 id="Navbar-title">Kon-Bon Gaming</h1>
              <div className="wave"></div>
            </span>

            <div className="row row-cols-3">
              <div className="col">
                <button type="button">
                  {" "}
                  <Link to="/">Home</Link>
                </button>
              </div>
              <div className="col">
                <button type="button">
                  {" "}
                  <Link to="/game-catalog">Game Catalog</Link>
                </button>
              </div>
              <div className="col">
                <button type="button">
                  {" "}
                  <Link to="/login">Login</Link>
                </button>

                <div className="wave"></div>
              </div>
            </div>

            <div className="wave"></div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
