import React from "react";
import { Route, Switch } from "react-router-dom";
import Fixtures from "./Fixtures";
import "../App.css";
import Login from "./Login";
import Register from "./Register";
import MemberArea from "./MembersArea";
import Navbar from "./Navbar.js";
import Rules from "../components/Rules";

function App() {
  return (
    <Navbar>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/member-area" component={MemberArea} />
        <Route exact path="/fixtures" component={Fixtures} />
        <Route exact path="/rules" component={Rules} />
      </Switch>
    </Navbar>
  );
}

export default App;
