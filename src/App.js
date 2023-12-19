/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/Navbar.css";
import "./assets/css/Home.css"
import ParticlesBg from "./components/ParticlesBg";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ParticlesConfig from "./components/config/ParticlesConfig";


function App() {
  return (
    <Router>
      <Routes>
        {/* Routes to the pages we want to show */}
        {/* <Route path="/ParticlesBg" element={<ParticlesConfig />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
