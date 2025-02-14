import { StateCreator } from "zustand";

// 🔔 Toast Notification Interface
export interface Toast {
  id: number;
  message: string;
}

// 🔥 Toast Store Type
export interface ToastState {
  toasts: Toast[];
  addToast: (message: string) => void;
  removeToast: (id: number) => void;
}

// ✅ Zustand Toast Substore
export const createToastStore: StateCreator<ToastState> = (set) => ({
  toasts: [],

  addToast: (message) => {
    const id = Date.now();
    set((state) => ({ toasts: [...state.toasts, { id, message }] }));

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== id),
      }));
    }, 3000);
  },

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
});
