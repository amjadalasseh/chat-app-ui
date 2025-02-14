import { StateCreator } from "zustand";

// 🗨️ Chat Message Interface
export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

// 🔥 Chat Store Type
export interface ChatState {
  messages: Message[];
  addMessage: (message: Message) => void;
  loadMessages: () => void;
}

// ✅ Zustand Chat Substore
export const createChatStore: StateCreator<ChatState> = (set) => ({
  messages: [
    { id: -1, text: "Hello! How can I assist you today?", sender: "bot" },
  ],

  addMessage: (message) =>
    set((state) => {
      const updatedMessages = [...state.messages, message];

      try {
        localStorage.setItem("chatHistory", JSON.stringify(updatedMessages));
      } catch (error) {
        console.warn("⚠️ Failed to store chat history:", error);
      }

      return { messages: updatedMessages };
    }),

  loadMessages: () => {
    try {
      const savedMessages = JSON.parse(
        localStorage.getItem("chatHistory") || "[]",
      ) as Message[];
      if (savedMessages.length > 0) set({ messages: savedMessages });
    } catch (error) {
      console.warn("⚠️ Failed to load chat history:", error);
      set({ messages: [] });
    }
  },
});
