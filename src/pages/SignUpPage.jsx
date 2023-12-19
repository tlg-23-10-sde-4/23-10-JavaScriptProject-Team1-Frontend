/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function SignUpPage() {
  const [formState, setFormState] = useState({ email: "", username: "", password: "" });
  const handleChange = (e) => {
    const { email, username, password } = e.target.value;
    setFormState({ ...formState, email: email, username: username, password: password });
    const handleFormSubmit = async (e) => {
      e.preventDefault();

      const data = {
        email: formState.email,
        username: formState.username,
        password: formState.password,
      };
      console.table(data);

      return (
        <div className="signUp">
          <label>Email: </label>
          <input
            required
            type="text"
            name="email"
            placeholder="Enter email: email@example.com"
            onChange={this.handleInputChange}
          />
          <label>Username: </label>
          <input
            required
            type="text"
            name="username"
            placeholder="Create username"
            onChange={this.handleInputChange}
          />
          <label>Password: </label>
          <input
            required
            type="text"
            name="password"
            placeholder="Create password"
            onChange={this.handleInputChange}
          />
          <button required onClick={this.postNewUserSignUp}>
            Save and Submit
          </button>
        </div>
      );
    };
  };
}

export default SignUpPage;
