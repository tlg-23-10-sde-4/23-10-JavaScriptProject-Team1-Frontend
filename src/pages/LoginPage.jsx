import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const [formState, setFormState] = useState({ userEmail: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      userEmail: formState.userName,
      password: formState.password,
    };
    console.log(data);

    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    const resData = response.json()

    if (response.status === 400) {
      toast.error(`${resData.message}`, {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
    } else if (response.status === 404) {
      toast.error(`${resData.message}`, {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
    } else if (response.status === 500) {
      toast.error(`${resData.message}`, {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
    } else if (response.status === 200) {
      toast.success(`${resData.message}`, {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
      setTimeout(() => {
        window.location.replace("/");
      }, 2000)
    }
  };

  return (
    <>
      {/* is this working */}
      <div className="login-wrapper">
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h1 className="welcomeback">Welcome Back</h1>
          <div className="form-section">
            <label htmlFor="userEmail">Email</label>
            <input
              type="text"
              required
              className="form-input"
              id="userEmail"
              name="userEmail"
              onChange={handleChange}
              placeholder="email@example.com"
            />
          </div>
          <div className="form-section">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-input"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="SunnySunShine232"
              value={formState.password}
            />
          </div>
          <input type="submit" value="Log In" />
          <div className="mt-3">
            <p className="text-light">
              Dont have an account yet? <Link to="/signup">Signup Here</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
