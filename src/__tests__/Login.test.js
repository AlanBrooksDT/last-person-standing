import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "../components/Login";

describe("Login render Page", () => {
  it("renders the Login page", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(getByTestId("LoginForm")).toBeInTheDocument();
  });

  it("render 2 input components", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(getByTestId("Email")).toBeInTheDocument();
    expect(getByTestId("Password")).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(getByRole("button")).toBeInTheDocument();
  });
});
