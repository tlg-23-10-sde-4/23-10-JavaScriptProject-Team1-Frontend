import React from 'react';
import { Dna } from "react-loader-spinner";
import GameCardGrid from '../components/GameCardGrid';
import NavBar from '../components/Navbar';

const GameCatalog = (props) => {
  const { games, isLoading } = props.data;
  console.log(games);
  if (isLoading) {
    return (
      <div className="loading-animation">
        <Dna
          visible={true}
          height="280"
          width="280"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    )
  } else {
    return (
      <div style={{ backgroundColor: '#444444' }}>
        <NavBar />
        <h1 className='text-light'>Welcome to the Game Catalog!</h1>
        <GameCardGrid data={props.data} />
      </div>
    );
  }
};

export default GameCatalog;