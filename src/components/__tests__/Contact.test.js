import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact us page test cases", () => {
  //to group test cases if there are multiple test cases
  test("Should load heading inside Contact us component", () => {
    render(<Contact />); //render a component to jsdom

    //Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("Should load 3 input boxes from Contact us component", () => {
    //We can also use 'it' instead of test and it works fine, 'it' is just an alias of test
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox"); //whenever there are multiple items that are being retrieved, use All
    console.log(inputBoxes.length); //this returns an object i.e., ReactElement/virtualdom
    expect(inputBoxes.length).toBe(3);
  });
});
