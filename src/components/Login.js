/* eslint-disable no-unused-vars */
import React from "react";

const Login = () => {
  return (
    <>
      <h1 style={{ paddingTop: "50px" }}>Login</h1>
      <form action="submit">
        <input type="email" required />
        <input type="password" required />
        <button type="submit">Login</button>
      </form>
      <p>Not a member? Register here!</p>
    </>
  );
};

export default Login;
