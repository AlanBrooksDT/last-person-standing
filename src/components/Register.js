/* eslint-disable no-unused-vars */
import React from "react";

const Register = () => {
    return (
    <>
    <h1>Register</h1>
    <form action="submit" >
      <input type="email" required placeholder="Email..."/>
      <input type="password" required placeholder="Password..."/>
      <input type="password" required placeholder="Confirm password..."/>
      <button type="submit">Submit</button>
      </form>
      <p>Already a member? Login here!</p>
    </>
    );
};

export default Register;