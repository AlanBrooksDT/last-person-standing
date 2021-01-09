import React from "react";
import "../App.css";
import Login from "./Login";
import Register from "./Register";
import MemberArea from "./MembersArea";
import Navbar from "./Navbar.js";
import Fixtures from "./Fixtures";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { useState } from "react";
import Rules from "../components/Rules";

function App() {
  const [user, setUser] = useState();
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  console.log("VALUE", value);
  console.log("USER", user);

  return (
    <Router>
      <Navbar>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Login
                handleChange={handleChange}
                setUser={setUser}
                value={value}
              />
            )}
          />
          <Route
            path="/register"
            render={() => (
              <Register handleChange={handleChange} value={value} />
            )}
          />
          <Route
            path="/home"
            render={() =>
              user ? <MemberArea user={user} /> : <Redirect to="/" />
            }
          />
          <Route path="/fixtures" render={() => <Fixtures />} />
          <Route exact path="/rules" component={Rules} />
        </Switch>
      </Navbar>
    </Router>
  );
}

export default App;
