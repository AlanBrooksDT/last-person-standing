//to be deleted

import axios from "axios";
import React from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";

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


// /* eslint-disable no-unused-vars */
// import axios from "axios";
// import React, {useState, useEffect} from "react";
// import "../styles/Register.css";
// import { Link } from "react-router-dom";

// const Register = ({ handleChange, value }) => {

//   const [fields, setFields] = useState({email: "", password: ""});
//   const [formErrors, setFormErrors] = useState({email: "", password: ""});
//   const [emailValid, setEmailValid] = useState(false);
//   const [passwordValid, setPasswordValid] = useState(false);
//   const [formValid, setFormValid] = useState(false);

//   const handleUserInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFields((previousState) => ({
//       ...previousState, 
//       [name]: value
//     }))
//     validateField(name, value)
//   }

//   validateField(fieldName, value) {
//     let fieldValidationErrors = this.state.formErrors;
//     let emailValid = this.state.emailValid;
//     let passwordValid = this.state.passwordValid;

//     switch(fieldName) {
//       case 'email':
//         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         fieldValidationErrors.email = emailValid ? '' : ' is invalid';
//         break;
//       case 'password':
//         passwordValid = value.length >= 6;
//         fieldValidationErrors.password = passwordValid ? '': ' is too short';
//         break;
//       default:
//         break;
//     }
//     setFormErrors(() => ({
//       ...
//       [fieldName]: value
//     }))
//     validateForm(fieldName, value)
//   }


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (value.password === value.confirmPassword) {
//       console.log("Passwords match!");

//       axios
//         .post("http://127.0.0.1:5000", {
//           email: value.email,
//           password: value.password,
//         })
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => console.error(err));
//     }
//   };

//   return (
//     <div className="register">
//       <h1>Register</h1>
//       <form action="submit" data-testid="RegisterForm" onSubmit={handleSubmit}>
//         <div className="textbox">
//           <i className="fa fa-user"></i>
//           <input
//             data-testid="Email"
//             type="email"
//             required
//             placeholder="Email..."
//             onChange={handleChange}
//             name="email"
//           />
//         </div>
//         <div className="textbox">
//           <i className="fa fa-unlock-alt"></i>
//           <input
//             data-testid="Password"
//             type="password"
//             required
//             placeholder="Password..."
//             onChange={handleChange}
//             name="password"
//           />
//         </div>
//         <div className="textbox">
//           <i className="fa fa-unlock-alt"></i>
//           <input
//             data-testid="confirmPassword"
//             type="password"
//             required
//             placeholder="Confirm password..."
//             onChange={handleChange}
//             name="confirmPassword"
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <Link to="/" style={{ fontSize: "16px" }}>
//         Already a member? Login here!
//       </Link>
//     </div>
//   );
// };

// export default Register;

/* eslint-disable no-unused-vars */