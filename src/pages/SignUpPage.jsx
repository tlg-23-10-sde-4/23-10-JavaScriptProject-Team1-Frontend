/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-toastify";

function SignUpPage() {
  const [formState, setFormState] = useState({ email: "", username: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const postNewUserSignUp = async (e) => {
    e.preventDefault(e);
    const data = {
      email: formState.email,
      username: formState.username,
      password: formState.password,
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3001/auth/signup", {
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
      }

      // Check for response with no content (204)
      if (!response.no_content) {
        toast.error(`${res.message}`, {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
        });
      }

      toast.success(`${res.message}`, {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
      // Handle success for signing up
    } catch (error) {
      toast.error(`${error}`, {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-form-wrapper">
      <form onSubmit={postNewUserSignUp} className="signup-form">
        <h1 className="text-light">Create an account</h1>
        <div className="signup-form-group">
          <label className="signup-form-label">Email:</label>
          <input
            required
            type="text"
            name="email"
            placeholder="Enter email: email@example.com"
            onChange={handleInputChange}
            className="signup-form-input"
          />
        </div>
        <div className="signup-form-group">
          <label className="signup-form-label">Username:</label>
          <input
            required
            type="text"
            name="username"
            placeholder="Create username"
            onChange={handleInputChange}
            className="signup-form-input"
          />
        </div>
        <div className="signup-form-group">
          <label className="signup-form-label">Password:</label>
          <input
            required
            type="password"
            name="password"
            placeholder="Create password"
            onChange={handleInputChange}
            className="signup-form-input"
          />
        </div>
        <button type="submit" className="signup-button">
          <span>Button</span><i></i>
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
