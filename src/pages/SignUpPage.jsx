/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [formState, setFormState] = useState({ email: "", username: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const postNewUserSignUp = async () => {
    console.log("Entering POST phase for post signup user");
    const data = {
      email: formState.email,
      username: formState.username,
      password: formState.password,
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (!response.ok) {
        toast.error(`${res.message}`, {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
        });
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

  const onSubmit = (e) => {
    e.preventDefault();
    postNewUserSignUp();
  };

  return (
    <div className="signUp">
      <form onSubmit={onSubmit}>
        <label>Email: </label>
        <input
          required
          type="text"
          name="email"
          id="email"
          placeholder="Enter email: email@example.com"
          onChange={handleInputChange}
        />
        <label>Username: </label>
        <input
          required
          type="text"
          name="username"
          id="username"
          placeholder="Create username"
          onChange={handleInputChange}
        />
        <label>Password: </label>
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="Create password"
          onChange={handleInputChange}
        />
        <button disabled={loading} type="submit">
          {loading ? "Signing up..." : "Save & Submit"}
        </button>

        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default SignUpPage;
