import { create, StoreApi } from "zustand";
import { ChatState, createChatStore } from "./chatStore";
import { ToastState, createToastStore } from "./toastStore";

// 🔥 Combined Store Type
type AppState = ChatState & ToastState;

// ✅ Merge Zustand Stores
export const useAppStore = create<AppState>((set, get, store) => ({
  ...createChatStore(set, get, store as StoreApi<ChatState>),
  ...createToastStore(set, get, store as StoreApi<ToastState>),
}));
