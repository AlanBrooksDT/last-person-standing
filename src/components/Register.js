/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Register = ({handleChange, value}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(value.password === value.confirmPassword) {
      console.log("Passwords match!")

      axios.post("http://127.0.0.1:5000", {
        email: value.email,
        password: value.password,
      }).then((res) => {
        console.log(res);
      }).catch((err) => console.error(err));
    }
  };

    return (
    <>
    <h1>Register</h1>
    <form action="submit" onSubmit={handleSubmit} >
      <input
      type="email"
      required
      placeholder="Email..."
      onChange={handleChange}
      name="email"
      />
      <input
      type="password"
      required
      placeholder="Password..."
      onChange={handleChange}
      name="password"
      />
      <input 
      type="password" 
      required placeholder="Confirm password..."
      onChange={handleChange}
      name="confirmPassword"
      />
      <button type="submit">Submit</button>

      </form>
      <Link to="/">Already a member? Login here!</Link>
    </>
  );
};

export default Register;
