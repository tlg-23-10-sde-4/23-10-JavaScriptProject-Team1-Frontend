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

  const postNewUserSignUp = async () => {
    const data = {
      email: formState.email,
      username: formState.username,
      password: formState.password,
    };

    try {
      setLoading(true);

      const response = await fetch("/auth/signUp", {
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
    <div className="signUp">
      <label>Email: </label>
      <input
        required
        type="text"
        name="email"
        placeholder="Enter email: email@example.com"
        onChange={handleInputChange}
      />
      <label>Username: </label>
      <input
        required
        type="text"
        name="username"
        placeholder="Create username"
        onChange={handleInputChange}
      />
      <label>Password: </label>
      <input
        required
        type="password"
        name="password"
        placeholder="Create password"
        onChange={handleInputChange}
      />
      <button disabled={loading} onClick={postNewUserSignUp}>
        {loading ? "Signing up..." : "Save and Submit"}
      </button>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default SignUpPage;
