import "../App.css";
import Login from "./Login";
import Register from "./Register";
import MemberArea from "./MembersArea";
import Fixtures from "./Fixtures";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

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
        render={() => <Register handleChange={handleChange} value={value}/>}
      />
      <Route 
        path="/home"
        render={() => (user? <MemberArea user={user} /> : <Redirect to="/" /> )}
      />
      <Route
      path="/fixtures"
      render={() => <Fixtures /> }
      />
    </Router>
  );
}

export default App;
