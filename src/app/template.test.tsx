import React from "react";
import { render, screen } from "@testing-library/react";
import Template from "./template";

// ✅ Mock dependent components
jest.mock("../components/Header/Header", () => {
  const MockHeader = () => <div data-testid="header">Mocked Header</div>;
  MockHeader.displayName = "MockHeader";
  return MockHeader;
});

jest.mock("../components/Toast/Toast", () => {
  const MockToast = () => <div data-testid="toast">Mocked Toast</div>;
  MockToast.displayName = "MockToast";
  return MockToast;
});

jest.mock("../features/chat", () => {
  const MockChatFeature = () => (
    <div data-testid="chat-feature">Mocked ChatFeature</div>
  );
  MockChatFeature.displayName = "MockChatFeature";
  return MockChatFeature;
});
describe("Template Component", () => {
  it("renders Header, Toast, ChatFeature, and children", () => {
    render(
      <Template>
        <div data-testid="child-component">Child Content</div>
      </Template>,
    );

    // ✅ Check if Header is rendered
    expect(screen.getByTestId("header")).toBeInTheDocument();

    // ✅ Check if Toast is rendered
    expect(screen.getByTestId("toast")).toBeInTheDocument();

    // ✅ Check if ChatFeature is rendered
    expect(screen.getByTestId("chat-feature")).toBeInTheDocument();

    // ✅ Check if children are rendered
    expect(screen.getByTestId("child-component")).toBeInTheDocument();
  });

  it("logs page view on mount", () => {
    const consoleSpy = jest.spyOn(console, "log");

    render(
      <Template>
        <div />
      </Template>,
    );

    expect(consoleSpy).toHaveBeenCalledWith("Log page view");
    consoleSpy.mockRestore();
  });
});
