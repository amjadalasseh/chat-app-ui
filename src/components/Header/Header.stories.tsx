import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Header from "./Header";
import { useRouter } from "next/router";

// ✅ Define the meta object
const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      // ✅ Mock Next.js `usePathname`
      (useRouter as jest.Mock).mockReturnValue({ pathname: "/" });

      return <Story />;
    },
  ],
};

export default meta;

// ✅ Define story types
type Story = StoryObj<typeof Header>;

// ✅ Default Header (Home Page)
export const Default: Story = {};
