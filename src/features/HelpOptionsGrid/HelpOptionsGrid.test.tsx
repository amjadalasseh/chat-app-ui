import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HelpOptionsGrid from "./HelpOptionsGrid";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("HelpOptionsGrid Component", () => {
  let mockRouterPush: jest.Mock;

  beforeEach(() => {
    mockRouterPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });
  });

  it("renders all help options", () => {
    render(<HelpOptionsGrid />);

    const optionTitles = [
      "Request a refund",
      "Manage your bookings",
      "Route and delay info",
      "Payment Problems",
      "Baggage",
      "Book a ticket",
      "Vouchers",
      "Feedback",
      "Booking for Children",
      "Passengers with disabilities",
      "Security",
      "Contact Us",
    ];

    optionTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("navigates to '/refund' when 'Request a refund' is clicked", async () => {
    render(<HelpOptionsGrid />);

    // Click the entire card instead of just the text
    const refundCard = screen.getByText("Request a refund").closest("div");
    fireEvent.click(refundCard);

    // Ensure navigation is called
    await waitFor(() => expect(mockRouterPush).toHaveBeenCalledWith("/refund"));
  });

  it("opens the 'Contact Us' modal when clicking the Contact Us option", async () => {
    render(<HelpOptionsGrid />);

    // Click "Contact Us"
    fireEvent.click(screen.getByText("Contact Us"));

    // Wait for the modal to appear
    await waitFor(() => expect(screen.findByRole("dialog")).toBeTruthy());
  });
});
