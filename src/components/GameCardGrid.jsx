import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GameCard({ game }) {
  return (
    <Card style={{ width: '18rem' }} className='game-card'>
      <Card.Img style={{ height: "12rem" }} variant="top" src={game.background_image} />
      <Card.Body className='game-card-body'>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>Released: {game.released}</Card.Text>
        <Link to={`/GameDetails/${game.id}`} className="btn btn-primary">Check this out</Link>
      </Card.Body>
    </Card>
  );
}

function GameCardGrid(props) {
  const [sortedGames, setSortedGames] = useState([]); // useState to hold the sorted games
  const games = props.data.games
  // Sort the games initially
  useEffect(() => {
    const sortedByYear = [...games]; // Create a new array to avoid modifying the original data
    sortedByYear.sort((a, b) => new Date(a.released) - new Date(b.released));
    setSortedGames(sortedByYear); // Update the sorted games.
  }, [games]); // In theory this effect will change whenever the 'games' prop changes

  //sorting function that takes in the sortedGames array and returns a new sortedGames array
  const sortGamesByYear = () => {
    const sortedByYear = [...games];  // Create a new array to avoid modifying the original data
    sortedByYear.sort((a, b) => new Date(a.released) - new Date(b.released));
    setSortedGames(sortedByYear);
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <Button className='w-50 align-self-center' variant="primary" onClick={sortGamesByYear}>
        Sort by Year
      </Button>
      <div className='catalog-container'>
        {/* .map() abstracts away the iteration process and handles it internally...which is baller */}
        {sortedGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default GameCardGrid;

