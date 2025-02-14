import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FlixBusLogo } from "./FlixBusLogo";

const meta: Meta<typeof FlixBusLogo> = {
  title: "Components/FlixBusLogo",
  component: FlixBusLogo,
  argTypes: {
    className: {
      control: "text",
      description: "CSS class applied to the logo",
    },
    backgroundColor: {
      control: "color",
      description: "Change background color for contrast testing",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FlixBusLogo>;

/**
 * 📏 Responsive Logo Example
 */
export const ResponsiveLogo: Story = {
  args: {
    className: "w-40 h-10",
  },
  decorators: [
    (Story) => (
      <div className="p-4 border border-gray-300 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};
