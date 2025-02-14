import { create, StoreApi } from "zustand";

import { ToastState, createToastStore } from "./toastStore";

// 🔥 Combined Store Type
type AppState = ToastState;

// ✅ Merge Zustand Stores
export const useAppStore = create<AppState>((set, get, store) => ({
  ...createToastStore(set, get, store as StoreApi<ToastState>),
}));
