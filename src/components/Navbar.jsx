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
                <button id="home" className="btn btn-primary" type="button">
                  {" "}
                  <Link id="home" to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-house-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                    </svg>
                    Home
                  </Link>
                </button>
              </div>
              <div className="col">
                <button id="games" className="btn btn-primary" type="button">
                  {" "}
                  <Link id="games" to="/game-catalog">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-joystick"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2" />
                      <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z" />
                    </svg>
                    Games
                  </Link>
                </button>
              </div>
              <div className="col">
                <button id="login" className="btn btn-primary" type="button">
                  {" "}
                  <Link id="login" to="/login">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-door-open-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                    </svg>
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
