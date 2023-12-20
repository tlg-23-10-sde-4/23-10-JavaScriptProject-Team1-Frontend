/* eslint-disable no-unused-vars */
import { ToastContainer } from "react-toastify";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/Navbar.css";
import "./assets/css/Home.css";
import "./assets/css/login.css"
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ParticlesConfig from "./components/config/ParticlesConfig";
import GameCatalog from "./pages/GameCatalog";

function App() {
  return (
    <Router>
      <ToastContainer theme="colored" autoClose={2000} />
      <Routes>
        {/* Routes to the pages we want to show */}
        {/* <Route path="/ParticlesBg" element={<ParticlesConfig />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/GameCatalog" element={<GameCatalog />} />
      </Routes>
    </Router>
  );
}

export default App;