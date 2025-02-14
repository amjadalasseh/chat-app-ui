import { isValidEmail, isRequired } from "./validators";

describe("isValidEmail", () => {
  it("should return true for valid email addresses", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("john.doe+alias@subdomain.example.co.uk")).toBe(true);
    expect(
      isValidEmail("very.long.email.address@another.valid.domain.com"),
    ).toBe(true);
    expect(isValidEmail("user123@domain.com")).toBe(true);
    expect(isValidEmail("test.test@domain-hyphen.com")).toBe(true); // Hyphen in domain
    expect(isValidEmail("test+alias@domain.museum")).toBe(true); // Longer TLD
    expect(isValidEmail("test@123.com")).toBe(true); // Numeric domain
  });

  it("should return false for invalid email addresses (core cases)", () => {
    expect(isValidEmail("test@example")).toBe(false); // Missing TLD
    expect(isValidEmail("@example.com")).toBe(false); // Missing username
    expect(isValidEmail("test@.com")).toBe(false); // Invalid domain
    expect(isValidEmail("test@examplecom")).toBe(false); // Missing dot in domain
    expect(isValidEmail("test@example..com")).toBe(false); // Double dot in domain
    expect(isValidEmail("test@example.com.")).toBe(false); // Trailing dot
    expect(isValidEmail("test@example.com ")).toBe(false); // Trailing space
    expect(isValidEmail(" test@example.com")).toBe(false); // Leading space
    expect(isValidEmail("test@example.com-")).toBe(false); // Hyphen at end of domain

    expect(isValidEmail("test@example.com_")).toBe(false); // Underscore in domain
    expect(isValidEmail("test@example.com/")).toBe(false); // Slash in domain
    expect(isValidEmail("test@example.com\\")).toBe(false); // Backslash in domain
  });

  it("should handle empty strings", () => {
    expect(isValidEmail("")).toBe(false);
  });
});

describe("isRequired", () => {
  it("should return true for non-empty strings (after trimming)", () => {
    expect(isRequired("test")).toBe(true);
    expect(isRequired("  test  ")).toBe(true); // Spaces around the word
    expect(isRequired("123")).toBe(true);
    expect(isRequired("!@#")).toBe(true);
  });

  it("should return false for empty strings or strings with only whitespace", () => {
    expect(isRequired("")).toBe(false);
    expect(isRequired("   ")).toBe(false); // Only spaces
    expect(isRequired("\t\n\r")).toBe(false); // Only whitespace characters
  });
});
