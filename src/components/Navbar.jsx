import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="nav-component-main">
      <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Kon-Bon Gamers</span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game-catalog">Game Catalog</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
