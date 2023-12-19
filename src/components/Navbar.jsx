import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <header className="Navbar" id="Navbar-component-main">
      <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <div class="wave"></div>

          <span className="navbar-brand mb-0 h1">
            <h1 id="Navbar-title">Kon-Bon Gaming</h1>
            <div class="wave"></div>
          </span>

          <div class="row row-cols-3">
            <div class="col">
              <button type="button">
                {" "}
                <Link to="/">Home</Link>
              </button>
            </div>
            <div class="col">
              <button type="button">
                {" "}
                <Link to="/game-catalog">Game Catalog</Link>
              </button>
            </div>
            <div class="col">
              <button type="button">
                {" "}
                <Link to="/login">Login</Link>
              </button>

              <div class="wave"></div>
            </div>
          </div>

          <div class="wave"></div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
