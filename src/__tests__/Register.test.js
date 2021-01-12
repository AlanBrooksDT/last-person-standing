import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Register from '../components/Register';

describe("Register render Page", () => {
    it("renders the Register page", () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      );
      expect(getByTestId("RegisterForm")).toBeInTheDocument();
    });
  
    it("render 3 input components", () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      );
      expect(getByTestId("Email")).toBeInTheDocument();
      expect(getByTestId("Password")).toBeInTheDocument();
      expect(getByTestId("confirmPassword")).toBeInTheDocument();
    });
  
    it("renders a submit button", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      );
      expect(getByRole("button")).toBeInTheDocument();
    });
  });
  