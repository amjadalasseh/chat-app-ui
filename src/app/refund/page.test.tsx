import React from "react";
import { render, screen } from "@testing-library/react";
import Refund from "./page";

// ✅ Mock dependent components
jest.mock("../../components/Breadcrumb/Breadcrumb", () => {
  const MockBreadcrumb = () => (
    <div data-testid="breadcrumb">Mocked Breadcrumb</div>
  );
  MockBreadcrumb.displayName = "MockBreadcrumb";
  return MockBreadcrumb;
});

jest.mock("../../components/Card/Card", () => {
  return function MockCard({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <div data-testid="card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
});

describe("Refund Component", () => {
  it("renders Breadcrumb and Card components", () => {
    render(<Refund />);

    // ✅ Check if Breadcrumb is rendered
    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument();

    // ✅ Check if Card is rendered
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  it("displays the correct card description", () => {
    render(<Refund />);

    const descriptionText =
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

    // ✅ Check if the description is rendered correctly
    expect(screen.getByText(descriptionText)).toBeInTheDocument();
  });
});
