import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faHouse, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
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
                <button id="home" className="btn btn-primary" type="button">
                  <Link id="home" to="/">
                    <FontAwesomeIcon icon={faHouse} />
                    Home
                  </Link>
                </button>
              </div>

              <div className="col">
                <button id="games" className="btn btn-primary" type="button">
                  <Link id="games" to="/GameCatalog">
                    <FontAwesomeIcon icon={faGamepad} />
                    Games
                  </Link>
                </button>
              </div>

              <div className="col">
                <button id="login" className="btn btn-primary" type="button">
                  <Link id="login" to="/login">
                    <FontAwesomeIcon icon={faDoorOpen} />
                    Login
                  </Link>
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
