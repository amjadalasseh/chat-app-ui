import React from "react";
import { theme } from "@/theme";

export type ButtinVariants =
  | "primary"
  | "secondary"
  | "danger"
  | "link"
  | "outlineprimary"
  | "outlinesecondary"
  | "outlinedanger";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: ButtinVariants;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "outlineprimary",
  disabled = false,
  className = "",
}) => {
  const variantClasses = {
    primary: theme.button.variants.primary,
    secondary: theme.button.variants.secondary,
    danger: theme.button.variants.danger,
    outlineprimary: theme.button.variants.outlineprimary,
    outlinesecondary: theme.button.variants.outlinesecondary,
    outlinedanger: theme.button.variants.outlinedanger,
    link: theme.button.variants.link,
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      disabled={disabled}
      className={`${theme.button.base} ${variantClasses[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
