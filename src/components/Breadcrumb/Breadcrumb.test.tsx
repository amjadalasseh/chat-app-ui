import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Breadcrumb Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with a given pathname", () => {
    render(<Breadcrumb pathname="/home/products/shoes" />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("products")).toBeInTheDocument();
    expect(screen.getByText("shoes")).toBeInTheDocument();
  });

  it("renders correct links", () => {
    render(<Breadcrumb pathname="/home/products/shoes" />);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "home" })).toHaveAttribute(
      "href",
      "/home",
    );
    expect(screen.getByRole("link", { name: "products" })).toHaveAttribute(
      "href",
      "/home/products",
    );
  });

  it("last segment is not a link", () => {
    render(<Breadcrumb pathname="/home/products/shoes" />);
    expect(screen.getByText("shoes").closest("a")).toBeNull();
  });

  it("handles missing pathname (fallback to '/')", () => {
    (usePathname as jest.Mock).mockReturnValue(null);

    render(<Breadcrumb pathname={undefined} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.queryByRole("link")).toHaveAttribute("href", "/");
  });

  it("renders empty breadcrumb for root path", () => {
    render(<Breadcrumb pathname="/" />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.queryByText("/")).toBeNull(); // No extra segments
  });

  it("ensures accessibility with role navigation", () => {
    render(<Breadcrumb pathname="/home/products/shoes" />);
    expect(screen.getByRole("navigation")).toHaveAttribute(
      "aria-label",
      "breadcrumb",
    );
  });
});
