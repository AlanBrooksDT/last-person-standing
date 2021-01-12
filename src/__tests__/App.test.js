import { render, screen } from "@testing-library/react";
import App from "../components/App";


describe("App render Page", () => {
  xit("renders the App page", () => {
    const { getByTestId } = render(
      <App />
    );
    expect(getByTestId("App")).toBeInTheDocument();
  });
});

// test("renders Last Person Standing", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/last Person Standing/i);
//   expect(linkElement).toBeInTheDocument();
// });
