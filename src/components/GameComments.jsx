import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Auth from "../utils/authUtil";
function GameComments(props) {
  const [formState, setFormState] = useState({ usercomment: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({ ...formState, [name]: value });
  };

  console.log(Auth.getUserId());
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const data = {
      usercomment: formState.usercomment,
      user_id: Auth.getUserId(),
      game_id: props.gameId,
    };
    console.log(data);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <Card>
            <Card.Header>Add a Comment</Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title>This will be the user ID</Card.Title>
              <Form.Group>
                {/* <textarea
                  name="usercomment"
                  id="usercomment"
                  placeholder="Tell us about your experience"
                  cols="50"
                  rows="4"
                ></textarea> */}
                <Form.Control
                  as="textarea"
                  name="usercomment"
                  id="usercomment"
                  onChange={handleChange}
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
                <Button type="submit" variant="dark">
                  Submit
                </Button>
              </Form.Group>
            </Card.Body>
          </Card>
        </form>
      </div>
    </div>
  );
}

export default GameComments;
