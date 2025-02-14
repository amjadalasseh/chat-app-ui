import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FaBeer } from "react-icons/fa"; // Example icon
import Card from "@/components/Card/Card";

describe("Card Component", () => {
  it("renders the title and description correctly", () => {
    render(<Card title="Test Title" description="Test Description" />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders an image when imageUrl is provided", () => {
    render(
      <Card title="Test Title" imageUrl="https://example.com/image.jpg" />,
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
    expect(image).toHaveAttribute("alt", "Test Title");
  });

  it("renders an icon when an icon is provided", () => {
    render(<Card title="Test Title" icon={FaBeer} />);

    expect(screen.getByTestId("card-icon")).toBeInTheDocument();
  });

  it("renders a button when onClick is provided and triggers click event", () => {
    const handleClick = jest.fn();
    render(
      <Card title="Test Title" buttonLabel="Click Me" onClick={handleClick} />,
    );

    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not render a button when onClick is not provided", () => {
    render(<Card title="Test Title" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
