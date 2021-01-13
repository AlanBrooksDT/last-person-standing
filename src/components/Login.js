/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/Login.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Login = ({ handleChange, value, setUser }) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/login", {
        email: value.email,
        // username: value.username,
        password: value.password,
      })
      .then((res) => {
        setUser(res);
        history.push("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form" data-testid="LoginForm" action="submit" onSubmit={handleSubmit}>
      {/* <div className="textbox">
          <i className="fa fa-user"></i>
          <input
            data-testid="UserName"
            type="username"
            required
            placeholder="Username..."
            onChange={handleChange}
            name="username"
          />
        </div> */}
        <div className="textbox">
          <i className="fa fa-user"></i>
          <input
            data-testid="Email"
            type="email"
            required
            placeholder="Email..."
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="textbox">
          <i className="fa fa-unlock-alt"></i>
          <input
            data-testid="Password"
            type="password"
            required
            placeholder="Password..."
            onChange={handleChange}
            name="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/register" style={{ fontSize: "16px" }}>
        Not a member? Register here!
      </Link>
    </div>
  );
};

export default Login;
