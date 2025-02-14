import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ChatFeature from "./index";
import { create } from "zustand";
import { fetchBotResponse } from "../../services/chatService";

// ✅ Mock Zustand Store (Properly Typed)
const mockUseAppStore = create(() => ({
  messages: [{ id: 1, text: "Hello! How can I assist you?", sender: "bot" }],
  addMessage: jest.fn(),
  loadMessages: jest.fn(),
  addToast: jest.fn(),
}));

jest.mock("../../store/useAppStore", () => ({
  useAppStore: () => mockUseAppStore(),
}));

jest.mock("../../services/chatService", () => ({
  fetchBotResponse: jest.fn(),
}));

// ✅ Mock scrollIntoView for Jest Environment
global.HTMLElement.prototype.scrollIntoView = jest.fn();

describe("ChatFeature Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ✅ 1️⃣ Renders chat button correctly
  it("renders chat button initially", () => {
    render(<ChatFeature />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  // ✅ 2️⃣ Opens chat window when button is clicked
  it("opens chat window when clicking the button", async () => {
    render(<ChatFeature />);
    fireEvent.click(screen.getByRole("button"));

    expect(await screen.findByText("Chat with us!")).toBeInTheDocument();
  });

  // ✅ 3️⃣ Ensures chat input is rendered
  it("displays the input field when chat is open", async () => {
    render(<ChatFeature />);
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText("Type your message..."),
      ).toBeInTheDocument();
    });
  });

  // ✅ 4️⃣ Sends a user message and displays it
  it("sends a user message and displays it", async () => {
    render(<ChatFeature />);
    fireEvent.click(screen.getByRole("button"));

    const input = await screen.findByPlaceholderText("Type your message...");
    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(mockUseAppStore.getState().addMessage).toHaveBeenCalledWith({
        id: expect.any(Number),
        text: "Hello",
        sender: "user",
      });
    });
  });

  // ✅ 5️⃣ Calls bot API and displays bot response
  it("calls bot API and displays bot response", async () => {
    fetchBotResponse.mockResolvedValue("Hello, user!");

    render(<ChatFeature />);
    fireEvent.click(screen.getByRole("button"));

    const input = await screen.findByPlaceholderText("Type your message...");
    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(fetchBotResponse).toHaveBeenCalledWith("Hello");
      expect(mockUseAppStore.getState().addMessage).toHaveBeenCalledWith({
        id: expect.any(Number),
        text: "Hello, user!",
        sender: "bot",
      });
    });
  });

  // ✅ 6️⃣ Displays an error toast when API call fails
  it("displays an error toast if bot response fails", async () => {
    fetchBotResponse.mockRejectedValue(new Error("API Error"));

    render(<ChatFeature />);
    fireEvent.click(screen.getByRole("button"));

    const input = await screen.findByPlaceholderText("Type your message...");
    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(mockUseAppStore.getState().addToast).toHaveBeenCalledWith(
        "Something went wrong!Error: API Error",
      );
    });
  });

  // ✅ 7️⃣ Closes chat window when close button is clicked
  it("closes chat window when close button is clicked", async () => {
    render(<ChatFeature />);
    fireEvent.click(screen.getByRole("button"));

    const closeButton = await screen.findByTestId("close-button"); // Find close button
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText("Chat with us!")).not.toBeInTheDocument();
    });
  });
});
