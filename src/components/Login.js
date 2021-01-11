/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

const Login = ({handleChange, value, setUser}) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://127.0.0.1:5000/login", {
      email: value.email,
      password: value.password
    }).then((res) => {
      setUser(res);
      history.push("/home")
    })
    .catch((err) => {
      console.error(err);
    })
  };
  
    return (
    <>
    <h1>Login</h1>
    <form data-testid="LoginForm" action="submit" onSubmit={handleSubmit}>
      <input
      data-testid="Email"
      label="Email"
      type="email"
      required
      placeholder="Email..."
      onChange={handleChange}
      name="email"
      />
      <input
      data-testid="Password"
      label="Password"
      type="password"
      required
      placeholder="Password..."
      onChange={handleChange}
      name="password"
      />
      <button type="submit">Login</button>

      </form>
      <Link to="/register">Not a member? Register here!</Link>
    </>
  );
};

export default Login;
