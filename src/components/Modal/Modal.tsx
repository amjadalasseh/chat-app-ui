"use client";
import React, { useEffect } from "react";
import { theme } from "@/theme";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  // Close modal when clicking outside
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close on ESC key press
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className={`${theme.card.base} rounded-lg w-96  relative`}>
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className={`text-xl ${theme.colors.text.green} font-bold`}>
            {title}
          </h2>
          <button onClick={onClose} aria-label="Close Modal">
            <IoClose
              className={`${theme.colors.text.primary} text-2xl cursor-pointer hover:${theme.colors.text.secondary}`}
            />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
