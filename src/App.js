/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/Navbar.css";
import Home from "./pages/Home";
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes to the pages we want to show */}
        <Route path="/" element={ <Home  /> } />
        <Route path="/login" element={ <LoginPage  /> } />
      </Routes>
    </Router>
  );
}

export default App;
