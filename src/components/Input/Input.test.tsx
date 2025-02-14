import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input Component", () => {
  test("renders input with correct placeholder", () => {
    render(
      <Input
        value=""
        placeholder="Enter text..."
        name="test"
        onChange={() => {}}
      />,
    );

    const inputElement = screen.getByPlaceholderText("Enter text...");
    expect(inputElement).toBeInTheDocument();
  });

  test("calls onChange when text is typed", () => {
    const mockOnChange = jest.fn();
    render(
      <Input
        value=""
        placeholder="Enter text..."
        name="test"
        onChange={mockOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText("Enter text...");
    fireEvent.change(inputElement, { target: { value: "Hello" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test("renders button if buttonName is provided", () => {
    render(
      <Input
        value=""
        placeholder="Search..."
        name="search"
        buttonName="Go"
        buttonClick={() => {}}
        onChange={() => {}}
      />,
    );

    const buttonElement = screen.getByRole("button", { name: "Go" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls buttonClick when button is clicked", () => {
    const mockButtonClick = jest.fn();
    render(
      <Input
        value=""
        placeholder="Search..."
        name="search"
        buttonName="Go"
        buttonClick={mockButtonClick}
        onChange={() => {}}
      />,
    );

    const buttonElement = screen.getByRole("button", { name: "Go" });
    fireEvent.click(buttonElement);

    expect(mockButtonClick).toHaveBeenCalledTimes(1);
  });

  test("renders password input correctly", () => {
    render(
      <Input
        type="password"
        value=""
        placeholder="Enter password..."
        name="password"
        onChange={() => {}}
      />,
    );

    const inputElement = screen.getByPlaceholderText("Enter password...");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "password");
  });
});
