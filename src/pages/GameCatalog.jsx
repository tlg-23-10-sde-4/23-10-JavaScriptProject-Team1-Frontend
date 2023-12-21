import React, { useState } from 'react';
import GameCardGrid from '../components/GameCardGrid';
import NavBar  from '../components/Navbar';

const GameCatalog = () => {
  const [games, setGames] = useState([])
  return (
    <div>
      <NavBar />
      <h1>Welcome to the Game Catalog!</h1>
      <GameCardGrid />
    </div>
  );
}

export default GameCatalog;
