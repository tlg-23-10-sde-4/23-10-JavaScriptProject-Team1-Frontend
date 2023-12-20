/* eslint-disable no-unused-vars */
import React, { useState } from "react";

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

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Bad Request: Invalid input data");
        } else if (response.status === 401) {
          throw new Error("Unauthorized: Authentication failed");
        } else {
          throw new Error("Unexpected error");
        }
      }

      // Check for response with no content (204)
      if (!response.no_content) {
        throw new Error("Response Error - 204 (No Content)");
      }

      console.log("User signed up successfully");
      // Handle success for signing up
    } catch (error) {
      console.error("Error signing up:", error.message);
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
