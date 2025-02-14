import React from "react";
import { theme } from "@/theme";

interface ChatMessageProps {
  text: string;
  sender: "user" | "bot";
}

export const ChatMessage = ({ text, sender }: ChatMessageProps) => {
  const { colors } = theme;

  const messageStyles =
    sender === "user"
      ? `${colors.background.primary} text-white self-end`
      : `${colors.background.muted} ${colors.text.primary} self-start`;

  return (
    <div className={`flex p-3 my-2 rounded-lg w-fit ${messageStyles} `}>
      {text}
    </div>
  );
};
