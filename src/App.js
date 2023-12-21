/* eslint-disable no-unused-vars */
import { ToastContainer } from "react-toastify";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import "./assets/css/Navbar.css";
import "./assets/css/Home.css";
import "./assets/css/login.css"
import "./assets/css/GameCatalog.css"
import "./assets/css/SignUpPage.css"
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
// import ParticlesConfig from "./components/config/ParticlesConfig";
import GameCatalog from "./pages/GameCatalog";
import Profile from "./pages/Profile";
import gameHandler from "./utils/gameHandler";
import GameDetails from "./pages/GameDetails";

function App() {
  const [games,setGames] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [user, setUser] = useState({});

  // Fetch the game data in top level (Here in the app.js) so we can pass it as a prop all of our pages
  const fetchGameData = async () => {
    const gameData = await gameHandler.fetchGames();
    setGames(gameData.games);
    setIsloading(false);
  }

  useEffect(() => {
    fetchGameData();
  }, []);

  const data ={ isLoading, setIsloading, games, user }
  return (
    <Router>
      <ToastContainer theme="colored" autoClose={2000} />
      <Routes>
        {/* Routes to the pages we want to show */}
        {/* <Route path="/ParticlesBg" element={<ParticlesConfig />} /> */}
        <Route path="/" element={<Home data={data} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/GameCatalog" element={<GameCatalog data={data} />} />
        <Route path="/profile" element={<Profile data={data} />} />
        <Route path="/GameDetails" element={<GameDetails data={data} />}/>
      </Routes>
    </Router>
  );
}

export default App;