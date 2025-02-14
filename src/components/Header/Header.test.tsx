import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { usePathname } from "next/navigation";
import "@testing-library/jest-dom";

// Mock Next.js `usePathname` hook
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Header Component", () => {
  it("renders the FlixBus logo", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<Header />);

    expect(screen.getByTestId("flixbus-logo")).toBeInTheDocument();
  });

  it.each([
    ["/", "Help Center"],
    ["/help", "Help Center"],
    ["/contact", "Contact Us"],
    ["/chat", "Live Chat"],
    ["/unknown", "FlixBus"], // Default case
  ])("displays the correct page title for '%s'", (path, expectedTitle) => {
    (usePathname as jest.Mock).mockReturnValue(path);
    render(<Header />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      expectedTitle,
    );
  });

  it("renders the search input field", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<Header />);

    const searchInput = screen.getByPlaceholderText(
      "How can we help you today?",
    );
    expect(searchInput).toBeInTheDocument();
  });

  it("allows user to type in the search input", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<Header />);

    const searchInput = screen.getByPlaceholderText(
      "How can we help you today?",
    );
    fireEvent.change(searchInput, { target: { value: "Booking issues" } });

    expect(searchInput).toHaveValue("Booking issues");
  });
});
