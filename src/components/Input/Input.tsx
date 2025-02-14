import React from "react";
import { theme } from "@/theme";

export function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  onKeyDown,
  ariaLabel,
  name,
  buttonClick,
  buttonName,
  variant = "default",
  required = false,
  label,
}: {
  type?: string;
  label?: string;
  ariaLabel?: string;
  placeholder?: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  buttonClick?: () => void;
  buttonName?: string;
  variant?: "default" | "outlined";
  required?: boolean;
}) {
  // ✅ Check if a button should be rendered alongside the input
  const hasButton = buttonName && buttonClick ? true : false;

  // ✅ Determine input styles based on variant (default or outlined)
  const variantClasses =
    variant === "outlined"
      ? `${theme.colors.border.default} bg-white text-gray-700 focus:ring-green-500 focus:border-green-600 rounded-lg`
      : "border-none shadow-sm";

  // ✅ Apply appropriate border styling depending on whether a button is present
  const borderStyling = hasButton ? "rounded-s-full" : "rounded-full";

  return (
    <div className="flex w-full">
      {/* ✅ Input Wrapper */}
      <div className="flex flex-col w-full">
        {/* ✅ Label Section (Shown only if `label` is provided) */}
        {label && (
          <label className="text-sm mb-1" htmlFor={name}>
            {label} {/* ✅ Display required asterisk if `required` is true */}
            {required && (
              <span
                className={` ${theme.colors.text.red} text-sm mt-1 ml-1 font-bold`}
              >
                *
              </span>
            )}
          </label>
        )}

        {/* ✅ Input Field */}
        <input
          type={type} // Set input type (e.g., text, password, email, etc.)
          value={value} // Controlled component value
          name={name} // Input field name
          onChange={onChange} // Handle input changes
          onKeyDown={onKeyDown} // Handle keypress (e.g., Enter key)
          placeholder={placeholder} // Display placeholder text
          required={required} // Mark as required if needed
          className={`w-full p-2 ${theme.input.base} ${borderStyling} ${variantClasses} ${theme.spacing.sm}`}
          aria-label={ariaLabel} // Accessibility label
          aria-required={required} // Accessibility: Indicate required field
        />
      </div>

      {/* ✅ Button Section (Shown only if `buttonClick` and `buttonName` exist) */}
      {hasButton && (
        <button
          onClick={buttonClick} // Execute button click handler
          className={`min-w-[68px] ${theme.button.variants.primary} ${theme.input.rounded.right}`}
          aria-label={ariaLabel} // Accessibility label
        >
          {buttonName} {/* Display button text */}
        </button>
      )}
    </div>
  );
}
