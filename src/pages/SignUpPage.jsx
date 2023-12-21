/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formState, setFormState] = useState({ email: "", username: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const postNewUserSignUp = async () => {
    console.log("Entering POST phase for post signup user");
    const data = {
      email: formState.email,
      username: formState.username,
      password: formState.password,
    };

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          toast.error(`${res.message}`, {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
          });
        } else if (response.status === 401) {
          toast.error(`${res.message}`, {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
          });
        } else {
          toast.error(`${res.message}`, {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
          });
        }
      } else {
        // Check for response with no content (204)
        if (!response.no_content) {
          toast.error(`${res.message}`, {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
          });
        } else {
          toast.success(`${res.message}`, {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
          });
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Error during signup. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
      setError(error.message);
    } finally {
      setLoading(false);
      window.location.replace("/");
    }
  };

  return (
    <div className="signUp">
      <label>Email: </label>
      <input
        required
        type="text"
        name="email"
        placeholder="Enter email: email@example.com"
        onChange={handleInputChange}
        input
      />
      <label>Username: </label>
      <input
        required
        type="text"
        name="username"
        placeholder="Create username"
        onChange={handleInputChange}
        input
      />
      <label>Password: </label>
      <input
        required
        type="password"
        name="password"
        placeholder="Create password"
        onChange={handleInputChange}
        input
      />
      <button disabled={loading} onClick={postNewUserSignUp}>
        <Link to="/home"> {loading ? "Signing up..." : "Save & Submit"}</Link>
      </button>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default SignUpPage;
