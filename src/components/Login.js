/* eslint-disable no-unused-vars */
import React from 'react';

const Login = () => {
    return (
    <>
    <h1>Login</h1>
    <form action="submit" >
      <input type="email" required placeholder="Email..."/>
      <input type="password" required placeholder="Password..."/>
      <button type="submit">Login</button>
      </form>
      <p>Not a member? Register here!</p>
    </>
    );
};

export default Login;