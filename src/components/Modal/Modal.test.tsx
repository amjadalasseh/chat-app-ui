import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Modal from "./Modal";
import "@testing-library/jest-dom";

describe("Modal Component", () => {
  let onCloseMock: jest.Mock;

  beforeEach(() => {
    onCloseMock = jest.fn();
  });

  it("does not render when `isOpen` is false", () => {
    render(
      <Modal isOpen={false} title="Test Modal" onClose={onCloseMock}>
        Content
      </Modal>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders correctly when `isOpen` is true", () => {
    render(
      <Modal isOpen={true} title="Test Modal" onClose={onCloseMock}>
        Content
      </Modal>,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("closes when the close button is clicked", () => {
    render(
      <Modal isOpen={true} title="Test Modal" onClose={onCloseMock}>
        Content
      </Modal>,
    );

    const closeButton = screen.getByRole("button", { name: /close modal/i });
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("closes when clicking outside the modal", () => {
    render(
      <Modal isOpen={true} title="Test Modal" onClose={onCloseMock}>
        Content
      </Modal>,
    );

    fireEvent.click(screen.getByRole("dialog"));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("closes when Escape key is pressed", async () => {
    render(
      <Modal isOpen={true} title="Test Modal" onClose={onCloseMock}>
        Content
      </Modal>,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => expect(onCloseMock).toHaveBeenCalledTimes(1));
  });
});
