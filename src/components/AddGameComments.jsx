import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Auth from "../utils/authUtil";
import { toast } from 'react-toastify'

function AddGameComments(props) {
  const [formState, setFormState] = useState({ usercomment: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const data = {
      usercomment: formState.usercomment,
      user_id: Auth.getUserId(),
      game_id: props.gameId,
    };
    const response = await fetch("http://localhost:3001/addComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();

    if (response.status === 200) {
      toast.success(`${resData.message}`, {
        position: toast.position.BOTTOM_RIGHT,
        draggable: false,
      });
    }
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

export default AddGameComments;
