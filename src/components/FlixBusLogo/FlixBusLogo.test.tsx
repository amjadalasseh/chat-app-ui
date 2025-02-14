import React from "react";
import { render, screen } from "@testing-library/react";
import { FlixBusLogo } from "./FlixBusLogo";
import "@testing-library/jest-dom";

describe("FlixBusLogo Component", () => {
  it("renders the SVG logo", () => {
    render(<FlixBusLogo />);
    const logo = screen.getByTestId("flixbus-logo");
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe("svg");
  });

  it("displays the text 'FLIXBUS'", () => {
    render(<FlixBusLogo />);
    expect(screen.getByText("FLIXBUS")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<FlixBusLogo className="custom-class" />);
    const logo = screen.getByTestId("flixbus-logo");
    expect(logo).toHaveClass("custom-class");
  });
});
