/**
 * Check if an email is valid
 */
export function isValidEmail(email: string): boolean {
  return (
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
    !email.includes("..") && // No double dots
    !email.includes("@.") && // No "@."
    !email.includes(".@") && // No ".@"
    !email.endsWith(".")
  ); // No trailing dot
}

/**
 * Validate required fields (generic function)
 */
export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}
