/* eslint-disable no-unused-vars */
import React from "react";

const Register = () => {
  return (
    <>
      <h1 style={{ paddingTop: "50px" }}>Register</h1>
      <form action="submit">
        <input type="email" required />
        <input type="password" required />
        <input type="password" required />
        <button type="submit">Submit</button>
      </form>
      <p>Already a member? Login here!</p>
    </>
  );
};

export default Register;
