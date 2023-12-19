/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function SignUpPage() {
  const [formState, setFormState] = useState({ email: "", username: "", password: "" }); //! hooking variables to store user input

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value }); //! handling(updating state)
  };

  const postNewUserSignUp = async () => {
    //! handling form submission POST request
    const data = {
      email: formState.email,
      username: formState.username,
      password: formState.password,
    }; //! data object

    try {
      const response = await fetch("//! update endpoint", {
        //? peep the fetch function sending a POST request
        method: "POST", //! POST request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network not ok");
      }

      console.log("User signed up successfully");
      // Handle success for signing up
    } catch (error) {
      console.error("Error signing up:", error.message); //! error handling
      // Handle error for signing up
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
        type="text"
        name="password"
        placeholder="Create password"
        onChange={handleInputChange}
      />
      <button required onClick={postNewUserSignUp}>
        Save and Submit
      </button>
    </div>
  );
}

export default SignUpPage;
