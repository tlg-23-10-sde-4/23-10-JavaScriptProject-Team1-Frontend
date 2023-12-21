import React from 'react';
import GameCardGrid from '../components/GameCardGrid';
import NavBar  from '../components/Navbar';

const GameCatalog = (props) => {
  const games = props.data.games;
  console.log(games);
  return (
    <div>
      <NavBar />
      <h1>Welcome to the Game Catalog!</h1>
      <GameCardGrid data={props.data} />
    </div>
  );
};

export default GameCatalog;