import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ChatInput } from "./ChatInput";

describe("ChatInput Component", () => {
  let mockOnSend: jest.Mock;

  beforeEach(() => {
    mockOnSend = jest.fn(); // Mock the function
    render(<ChatInput onSend={mockOnSend} />);
  });

  // ✅ 1️⃣ Test input renders
  it("renders input field correctly", () => {
    const input = screen.getByPlaceholderText("Type your message...");
    expect(input).toBeInTheDocument();
  });

  // ✅ 2️⃣ Allows typing in the input field
  it("updates input field when typing", () => {
    const input = screen.getByPlaceholderText(
      "Type your message...",
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Hello!" } });

    expect(input.value).toBe("Hello!");
  });

  // ✅ 3️⃣ Calls onSend when clicking the send button
  it("calls onSend and clears input when clicking send", () => {
    const input = screen.getByPlaceholderText(
      "Type your message...",
    ) as HTMLInputElement;
    const sendButton = screen.getByRole("button", { name: /send/i });

    fireEvent.change(input, { target: { value: "Hello!" } });
    fireEvent.click(sendButton);

    expect(mockOnSend).toHaveBeenCalledTimes(1);
    expect(mockOnSend).toHaveBeenCalledWith("Hello!");
    expect(input.value).toBe(""); // ✅ Input should be cleared
  });

  // ✅ 4️⃣ Calls onSend when pressing "Enter"
  it("calls onSend when Enter key is pressed", () => {
    const input = screen.getByPlaceholderText(
      "Type your message...",
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(mockOnSend).toHaveBeenCalledTimes(1);
    expect(mockOnSend).toHaveBeenCalledWith("Test message");
    expect(input.value).toBe(""); // ✅ Input should be cleared
  });

  // ✅ 5️⃣ Prevents sending empty messages
  it("does not call onSend for empty input", () => {
    const sendButton = screen.getByRole("button", { name: /send/i });

    fireEvent.click(sendButton);

    expect(mockOnSend).not.toHaveBeenCalled();
  });

  // ✅ 6️⃣ Prevents sending blank spaces
  it("does not send message if input only contains spaces", () => {
    const input = screen.getByPlaceholderText(
      "Type your message...",
    ) as HTMLInputElement;
    const sendButton = screen.getByRole("button", { name: /send/i });

    fireEvent.change(input, { target: { value: "    " } });
    fireEvent.click(sendButton);

    expect(mockOnSend).not.toHaveBeenCalled();
  });
});
