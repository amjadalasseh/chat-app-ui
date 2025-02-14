"use client";
import React, { useState } from "react";
import { theme } from "@/theme";
import { FlixBusLogo } from "@/components/FlixBusLogo/FlixBusLogo";
import { Input } from "@/components/Input/Input";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const pageTitles: Record<string, string> = {
    "/": "Help Center",
    "/help": "Help Center",
    "/contact": "Contact Us",
    "/chat": "Live Chat",
  };

  const currentPageTitle = pageTitles[pathname] || "FlixBus";

  return (
    <header>
      <div
        className={`flex flex-col md:flex-row items-center md:items-start justify-between md:justify-center ${theme.colors.background.primary} ${theme.spacing.md}`}
      >
        {/* Left: Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <FlixBusLogo className="h-12 w-auto flex-shrink-0" />
        </div>

        {/* Center: Title & Search Bar */}
        <div className="flex flex-col items-center justify-center flex-1 w-full md:w-auto text-center md:mx-auto">
          <h1 className={`text-2xl font-bold ${theme.colors.text.header}`}>
            {currentPageTitle}
          </h1>
          <div className="w-full max-w-lg relative mt-2">
            <Input
              type="text"
              placeholder="How can we help you today?"
              value={search}
              name="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Right: Empty Spacer for Alignment */}
        <div className="hidden md:flex md:w-auto md:min-w-[100px]"></div>
      </div>
    </header>
  );
};

export default Header;
