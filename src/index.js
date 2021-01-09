import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
