import React from "react";
import { useAppStore } from "@/store/useAppStore";
import { IoClose } from "react-icons/io5";
import { theme } from "@/theme";

const Toast = () => {
  const { toasts, removeToast } = useAppStore();

  return (
    <div className="fixed top-5 right-5 z-50 space-y-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center justify-between p-4 rounded-lg shadow-lg ${theme.colors.background.card} ${theme.colors.text.primary} dark:bg-gray-800 dark:text-white`}
        >
          <span>{toast.message}</span>
          <button onClick={() => removeToast(toast.id)}>
            <IoClose className="text-lg cursor-pointer hover:text-red-500" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
