import React from "react";
import { theme } from "@/theme";
import Button from "@/components/Button/Button";
import { IconType } from "react-icons";

interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  buttonLabel?: string;
  onClick?: () => void;
  rounded?: boolean;
  shadow?: boolean;
  icon?: IconType;
  color?: string;
}

export function Card({
  title,
  description,
  imageUrl,
  buttonLabel = "Learn More",
  onClick,
  rounded = true,
  shadow = true,
  icon: Icon,
  color = theme.colors.text.green, // Default to primary text color from theme
}: CardProps) {
  return (
    <div
      className={`
        py-4 px-8 border ${theme.colors.background.card} cursor-pointer flex flex-col items-center text-center
        ${rounded ? "rounded-md" : "rounded-none"}
        ${shadow ? theme.card.hover : "shadow-none"}
      `}
      onClick={onClick}
    >
      {/* Centered Image */}
      {imageUrl && (
        <div className="w-full flex justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-40 h-40 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Centered Icon */}
      {Icon && (
        <Icon data-testid="card-icon" className={`${color} text-3xl my-2`} />
      )}

      {/* Title and Description */}
      <h3
        className={` text-lg ${theme.colors.text.primary} ${color} font-bold mt-2`}
      >
        {title}
      </h3>
      {description && <p className={`$ text-base  mt-1`}>{description}</p>}

      {/* Button */}
      {onClick && (
        <div className="mt-3">
          <Button label={buttonLabel} onClick={onClick} />
        </div>
      )}
    </div>
  );
}

export default Card;
