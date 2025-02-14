import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactUsModal from "./ContactUsModal";
import "@testing-library/jest-dom";

// Mock the Modal component (optional if you have an actual implementation)
jest.mock("../../components/Modal/Modal", () => ({
  __esModule: true,
  default: ({
    isOpen,
    title,
    children,
    onClose,
  }: {
    isOpen: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
  }) =>
    isOpen ? (
      <div role="dialog" aria-label={title}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    ) : null,
}));

describe("ContactUsModal Component", () => {
  it("renders modal when open", () => {
    render(<ContactUsModal isOpen={true} onClose={jest.fn()} />);
    expect(
      screen.getByRole("dialog", { name: "Contact Us" }),
    ).toBeInTheDocument();
  });

  it("does not render modal when closed", () => {
    render(<ContactUsModal isOpen={false} onClose={jest.fn()} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("allows user to input data", () => {
    render(<ContactUsModal isOpen={true} onClose={jest.fn()} />);

    const firstNameInput = screen.getByLabelText("First Name");
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    expect(firstNameInput).toHaveValue("John");

    const lastNameInput = screen.getByLabelText("Last Name");
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    expect(lastNameInput).toHaveValue("Doe");

    const emailInput = screen.getByLabelText("Email Address");
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    expect(emailInput).toHaveValue("john@example.com");

    const bookingIdInput = screen.getByLabelText("Booking ID");
    fireEvent.change(bookingIdInput, { target: { value: "123456" } });
    expect(bookingIdInput).toHaveValue("123456");

    const messageInput = screen.getByPlaceholderText(
      "Enter additional details...",
    );
    fireEvent.change(messageInput, {
      target: { value: "This is a test message" },
    });
    expect(messageInput).toHaveValue("This is a test message");
  });

  it("allows user to select a contact reason", () => {
    render(<ContactUsModal isOpen={true} onClose={jest.fn()} />);

    const reasonSelect = screen.getByLabelText("Contact Reason");
    fireEvent.change(reasonSelect, { target: { value: "refund" } });
    expect(reasonSelect).toHaveValue("refund");
  });

  it("closes modal when close button is clicked", () => {
    const mockOnClose = jest.fn();
    render(<ContactUsModal isOpen={true} onClose={mockOnClose} />);

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
