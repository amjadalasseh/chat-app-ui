import React from "react";
import { render, screen } from "@testing-library/react";
import { ChatMessage } from "./ChatMessage";

describe("ChatMessage Component", () => {
  it("renders a user message correctly", () => {
    render(<ChatMessage text="Hello!" sender="user" />);

    const message = screen.getByText("Hello!");

    expect(message).toBeInTheDocument();
    expect(message).toHaveClass("self-end"); // ✅ Ensures user messages are aligned right
    expect(message).toHaveClass("text-white"); // ✅ Ensures user messages are white text
  });

  it("renders a bot message correctly", () => {
    render(<ChatMessage text="Hi there!" sender="bot" />);

    const message = screen.getByText("Hi there!");

    expect(message).toBeInTheDocument();
    expect(message).toHaveClass("self-start"); // ✅ Ensures bot messages are aligned left
    expect(message).toHaveClass("text-gray-900"); // ✅ Ensures bot messages use primary text color
  });
});
