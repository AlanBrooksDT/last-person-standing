import axios from "axios";
import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import "../styles/Register.css";
import { Link } from "react-router-dom";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      formErrors: { email: "", password: "", confirmPassword: ""},
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.password === this.state.confirmPassword) {
      console.log("Passwords match!");

      axios
        .post("http://127.0.0.1:5000", {
          email: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          this.props.setUser(res.data);
        })
        .catch((err) => console.error(err));
    }
  };

  validateField(fieldName, value) {


    switch (fieldName) {
      case "email":
      const  emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        this.setState((prevState) => ({
          ...prevState,
          formErrors: {
            ...prevState.formErrors,
            email: emailValid ? "" : " is invalid"
          },
          emailValid: emailValid
        }));
        break;
      case "password":
       const passwordValid = value.length >= 6;
        this.setState((prevState) => ({
          ...prevState,
          formErrors: {
            ...prevState.formErrors,
            password: passwordValid ? "" : " is too short"
          },
          passwordValid: passwordValid
        }));
        break;
        case "confirmPassword":
         const confirmPasswordValid = value === this.state.password;
          this.setState((prevState) => ({
            ...prevState,
            formErrors: {
              ...prevState.formErrors,
              confirmPassword: confirmPasswordValid ? "" : " does not match"
            },
            confirmPasswordValid: confirmPasswordValid
          }));
          break;
          default:
    }

      this.validateForm()
  };
  

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

//styling needs fixed

  render() {
    return (
      <div className="register">
        <h1>Register</h1>
        <form className="demoForm" onSubmit={this.handleSubmit}>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.email
            )}`}
          >
            <i className="fa fa-user"></i>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput}
            />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.password
            )}`}
          >
            <i className="fa fa-unlock-alt"></i>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput}
            />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.confirmPassword
            )}`}
          >
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="confirmPassword"
              className="form-control"
              name="confirmPassword"
              placeholder="Confirm password"
              value={this.state.confirmPassword}
              onChange={this.handleUserInput}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.formValid}
          >
            Register
          </button>
        </form>
        <Link to="/" style={{ fontSize: "16px" }}>
          Already a member? Login here!
        </Link>
      </div>
    );
  }
}

export default Register;
