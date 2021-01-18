/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import "../styles/Register.css";
import { Link, useHistory } from "react-router-dom";

const Register = ({ handleChange, value }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.password === value.confirmPassword) {
      console.log("Passwords match!");

      axios
        .post("http://127.0.0.1:5000", {
          email: value.email,
          password: value.password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form action="submit" data-testid="RegisterForm" onSubmit={handleSubmit}>
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
        <div className="textbox">
          <i className="fa fa-unlock-alt"></i>
          <input
            data-testid="confirmPassword"
            type="password"
            required
            placeholder="Confirm password..."
            onChange={handleChange}
            name="confirmPassword"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/" style={{ fontSize: "16px" }}>
        Already a member? Login here!
      </Link>
    </div>
  );
};

export default Register;
