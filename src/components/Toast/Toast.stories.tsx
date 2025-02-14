import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Toast from "./Toast";
import { useAppStore } from "@/store/useAppStore";

// ✅ Define the meta object
const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      // ✅ Inject mock Zustand store data
      useAppStore.setState({
        toasts: [
          { id: 1, message: "Success! Operation completed." },
          { id: 2, message: "Warning! Check your input." },
          { id: 3, message: "Error! Something went wrong." },
        ],
      });
      return <Story />;
    },
  ],
};

export default meta;

// ✅ Define story types
type Story = StoryObj<typeof Toast>;

// ✅ Default Empty State (No Toasts)

// ✅ Story: Showing Multiple Toasts
export const WithToasts: Story = {
  decorators: [
    (Story) => {
      useAppStore.setState({
        toasts: [
          { id: 1, message: "Success! Operation completed." },
          { id: 2, message: "Warning! Check your input." },
          { id: 3, message: "Error! Something went wrong." },
        ],
      });
      return <Story />;
    },
  ],
};

// ✅ Story: Single Toast
export const SingleToast: Story = {
  decorators: [
    (Story) => {
      useAppStore.setState({
        toasts: [{ id: 1, message: "This is a toast message!" }],
      });
      return <Story />;
    },
  ],
};
