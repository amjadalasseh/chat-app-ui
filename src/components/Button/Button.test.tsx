import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtinVariants } from "./Button";
import { theme } from "@/theme";

describe("Button Component", () => {
  it("renders with correct label", () => {
    render(<Button label="Click Me" onClick={jest.fn()} />);
    expect(
      screen.getByRole("button", { name: "Click Me" }),
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} disabled />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it.each<ButtinVariants>([
    "primary",
    "secondary",
    "danger",
    "link",
    "outlineprimary",
    "outlinesecondary",
    "outlinedanger",
  ])("applies correct variant styles for '%s'", (variant) => {
    render(
      <Button label="Test Button" onClick={jest.fn()} variant={variant} />,
    );

    const button = screen.getByRole("button");
    const expectedClass = theme.button.variants[variant];

    // Ensure expected class is NOT undefined or empty
    expect(expectedClass).toBeDefined();
    expect(expectedClass).not.toBe("");
    // Check that button has ALL expected classes from the theme
    expect(button).toHaveClass(expectedClass);
  });
  it("applies additional custom class", () => {
    render(
      <Button label="Click Me" onClick={jest.fn()} className="custom-class" />,
    );
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });
});
