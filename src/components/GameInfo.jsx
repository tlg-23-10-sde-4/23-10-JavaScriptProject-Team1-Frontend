import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import AddGameComments from "./AddGameComments";
import GetGameComments from "./GetGameComments";

function GameInfo(props) {
  const game = props?.game;
  console.log(game.comments);
  //   console.log(game.developer);

  return (
    <div className="d-flex column wrap">
      {/* <div className="jumbotron mt-1 custom-jumbotron">
        <p>{game.description}</p>
      </div> */}

      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={game.background_image} />
          <Card.Body>
            <Card.Title>
              <a href={game?.website}>{game.name}</a>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Company: {game?.developers[0].name}</ListGroup.Item>
            <ListGroup.Item>Rating: {game?.esrb_rating.name}</ListGroup.Item>
            <ListGroup.Item>
              Kon-Bon Stars: <Card.Link href="#">Card Link</Card.Link>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Description</Accordion.Header>
            <Accordion.Body>{game.description_raw}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Comments</Accordion.Header>
            <Accordion.Body>
              <GetGameComments gameComments={game.comments} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <AddGameComments gameId={game.id} />
      </div>
    </div>
  );
}

export default GameInfo;
