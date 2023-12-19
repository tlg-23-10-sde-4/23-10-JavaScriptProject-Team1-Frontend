/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
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
}

export default SignUpPage;
