"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { theme } from "@/theme";
import { FaComments } from "react-icons/fa";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { fetchBotResponse } from "@/services/chatService";
import { IoClose } from "react-icons/io5";
import { useAppStore } from "@/store/useAppStore";

const ChatFeature = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, addMessage, loadMessages, addToast } = useAppStore();
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // ✅ Function to scroll **after** DOM updates
  const scrollToBottom = async () => {
    await new Promise((resolve) => requestAnimationFrame(resolve)); // Ensures the next frame is rendered
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    scrollToBottom();
  };

  const handleSendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      const userMessage = { id: Date.now(), text, sender: "user" as const };
      addMessage(userMessage);
      scrollToBottom(); // ✅ Wait for UI update before scrolling

      try {
        const botResponse = await fetchBotResponse(text);
        const botMessage = {
          id: Date.now(),
          text: botResponse,
          sender: "bot" as const,
        };
        addMessage(botMessage);
        scrollToBottom(); // ✅ Scroll after bot response
      } catch (error) {
        addToast("Something went wrong!" + error);
      }
    },
    [addMessage, addToast],
  );

  useEffect(() => {
    loadMessages();
    scrollToBottom(); // ✅ Ensure we scroll on initial load
  }, [loadMessages]);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center ${theme.colors.background.primary} rounded-full ${theme.spacing.md} text-white shadow-lg`}
      >
        <FaComments className="text-2xl" />
      </button>

      {isOpen && (
        <div
          className={`absolute bottom-16 right-0 w-80 bg-white shadow-lg rounded-lg h-[400px] flex flex-col`}
        >
          <div
            className={`flex justify-between items-center border-b pb-2 rounded-t-lg ${theme.spacing.md} ${theme.colors.background.primary} ${theme.colors.text.header} `}
          >
            <div className="flex-grow text-center">
              <h3 className="text-lg font-medium">Chat with us!</h3>
            </div>
            <div>
              <IoClose
                data-testid="close-button"
                className={` text-2xl cursor-pointer hover:${theme.colors.text.secondary}`}
                onClick={toggleChat}
              />
            </div>
          </div>

          {/* ✅ Scrolling now works **smoothly** */}
          <div
            className={`overflow-y-auto flex border-b ${theme.spacing.md} ${theme.heights.lg.max} ${theme.heights.lg.h}`}
          >
            <div>
              {messages.map((msg) => (
                <ChatMessage key={msg.id} text={msg.text} sender={msg.sender} />
              ))}
              <div ref={chatEndRef} /> {/* ✅ Always scrolls to this element */}
            </div>
          </div>

          <ChatInput onSend={handleSendMessage} />
        </div>
      )}
    </div>
  );
};

export default ChatFeature;
