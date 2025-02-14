"use client";
import { useEffect } from "react";
import ChatFeature from "@/features/chat";
import Header from "@/components/Header/Header";
import Toast from "@/components/Toast/Toast";
import { theme } from "@/theme";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Log page view");
  }, []);
  return (
    <div className={`min-h-screen relative ${theme.backgroundImage.helpPage}`}>
      <div className="relative z-10">
        <Header />
        <Toast />
        <main className="max-w-7xl mx-auto p-4">{children}</main>
        <ChatFeature />
      </div>
    </div>
  );
}
