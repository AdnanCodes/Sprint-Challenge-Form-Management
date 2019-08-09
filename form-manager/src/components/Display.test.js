import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Display from "./Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
  it("button being used", () => {
    //Testing Button functionality
    let clicked = false;
    //Set basic button props
    const { getByText } = render(<Display btn={() => (clicked = true)} />);
    //Find button element
    const button = getByText(/Show me some secret data/i);
    fireEvent.click(button);
    expect(clicked).toBe(true);
  });
  it("Check Props being passed and Being Mapped", () => {
    const display = render(
      <Display
        dataStatus={true}
        data={[
          {
            name: "test",
            course: "course",
            technique: "technique"
          }
        ]}
      />
    );
    display.getByText(/^Name: test$/i); //Testing if prop is passed and rendered
  });
});
