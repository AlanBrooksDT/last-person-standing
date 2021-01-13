import React from "react";
import { render } from "@testing-library/react";
import Fixtures from "../components/Fixtures";

describe("Fixtures", () => {
  it("renders", () => {
    const { asFragment, getByTestId } = render(<Fixtures />);

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("fixtureContainer")).toBeInTheDocument();
    expect(getByTestId("homeTeam")).toBeInTheDocument();
  });
});
