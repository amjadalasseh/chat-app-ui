import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Toast from "./Toast";
import { IoClose } from "react-icons/io5";

jest.mock("../../store/useAppStore", () => {
  return {
    useAppStore: jest.fn(() => ({
      toasts: [],
      removeToast: jest.fn(),
    })),
  };
});

// ✅ Extract mock store function
const mockUseAppStore = jest.requireMock("../../store/useAppStore").useAppStore;

describe("Toast Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without errors when no toasts exist", () => {
    mockUseAppStore.mockReturnValue({ toasts: [], removeToast: jest.fn() });

    render(<Toast />);
    expect(screen.queryByText("Test Toast")).not.toBeInTheDocument();
  });

  it("displays toasts when added to the store", () => {
    mockUseAppStore.mockReturnValue({
      toasts: [{ id: 1, message: "Test Toast" }],
      removeToast: jest.fn(),
    });

    render(<Toast />);
    expect(screen.getByText("Test Toast")).toBeInTheDocument();
  });

  it("removes a toast when the close button is clicked", () => {
    const mockRemoveToast = jest.fn();

    mockUseAppStore.mockReturnValue({
      toasts: [{ id: 1, message: "Test Toast" }],
      removeToast: mockRemoveToast,
    });

    render(<Toast />);
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(mockRemoveToast).toHaveBeenCalledWith(1);
  });
});
