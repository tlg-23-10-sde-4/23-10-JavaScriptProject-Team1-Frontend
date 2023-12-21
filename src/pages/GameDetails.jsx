import React, { useParams } from "react";
import NavBar from "../components/Navbar";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";

const GameDetails = (props) => {
  // const game = props.data.game_id;
  // console.log(game);

  // You need these two together (Move these to the GameDetails Page)
  // Call the getGameById in a 'useEffect' hook.
  // Create a local 'isLoading' state to show loading screen while we get the data
  const [gameData, setGameData] = useState({});
  const getGameById = async (gameId) => {
    const url = `http://localhost:3001/api/gameById/${gameId}`;

    const response = await fetch(url, {
      method: "GET",
    });

    const resData = await response.json();
    if (response.status === 200) {
      setGameData(resData);
    } else {
      alert(`${resData.message}`); // Change this to toast.error
      setTimeout(() => {
        window.location.replace("/GameCatalog");
      }, 2000);
    }
  };

  // const { gameId } = useParams();
  return (
    <div>
      <div>
        <NavBar />
      </div>

      {/* different idea for page styling
      
      
      */}

      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default GameDetails;
