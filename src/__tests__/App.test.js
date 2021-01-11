import { render, screen } from "@testing-library/react";
import App from "../components/App";


xtest("renders Last Person Standing", () => {
  render(<App />);
  const linkElement = screen.getByText(/last Person Standing/i);
  expect(linkElement).toBeInTheDocument();
});
