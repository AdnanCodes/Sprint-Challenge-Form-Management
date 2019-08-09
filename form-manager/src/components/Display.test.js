import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Display from "./Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
  it("button being used", () => {
    let clicked = false;
    const { getByText } = render(<Display btn={() => (clicked = true)} />);
    const button = getByText(/Show me some secret data/i);
    fireEvent.click(button);
    expect(clicked).toBe(true);
  });
});
