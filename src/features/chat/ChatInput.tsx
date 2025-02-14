import { useState, useCallback } from "react";
import { Input } from "@/components/Input/Input";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSend = useCallback(() => {
    if (!input.trim()) return; // ✅ Prevent sending empty/spaces-only messages
    onSend(input); // ✅ Trim message before sending
    setInput(""); // ✅ Explicitly clear input
  }, [input, onSend]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  return (
    <Input
      type="text"
      name="chat-message"
      placeholder="Type your message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyPress}
      aria-label="Chat input"
      buttonName="Send"
      buttonClick={handleSend}
    />
  );
};
