import React from "react";
import { render, screen } from "@testing-library/react";
import HelpCenterPage from "./page";

// ✅ Mock the HelpOptionsGrid component
jest.mock("../features/HelpOptionsGrid/HelpOptionsGrid", () => {
  const MockHelpOptionsGrid = () => (
    <div data-testid="help-options-grid">Mocked HelpOptionsGrid</div>
  );
  MockHelpOptionsGrid.displayName = "MockHelpOptionsGrid";
  return MockHelpOptionsGrid;
});

describe("HelpCenterPage", () => {
  it("renders HelpOptionsGrid component", () => {
    render(<HelpCenterPage />);

    // ✅ Ensure the HelpOptionsGrid component is rendered
    expect(screen.getByTestId("help-options-grid")).toBeInTheDocument();
  });
});
