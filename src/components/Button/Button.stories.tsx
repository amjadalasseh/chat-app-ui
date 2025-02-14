import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtinVariants } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    className: { control: "text" },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "danger",
        "link",
        "outlineprimary",
        "outlinesecondary",
        "outlinedanger",
      ],
    },
    onClick: { action: "button clicked" }, // Action logger
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * 📌 Default Button (Primary by default)
 */
export const Default: Story = {
  args: {
    label: "Click Me",
    variant: "primary",
    disabled: false,
  },
};

/**
 * ✅ Primary Button
 */
export const Primary: Story = {
  args: {
    label: "Primary",
    variant: "primary",
  },
};

/**
 * ✅ Secondary Button
 */
export const Secondary: Story = {
  args: {
    label: "Secondary",
    variant: "secondary",
  },
};

/**
 * ⚠️ Danger Button (Red)
 */
export const Danger: Story = {
  args: {
    label: "Danger",
    variant: "danger",
  },
};

/**
 * 🔗 Link Button
 */
export const Link: Story = {
  args: {
    label: "Link",
    variant: "link",
  },
};

/**
 * 🏗️ Outline Primary
 */
export const OutlinePrimary: Story = {
  args: {
    label: "Outline Primary",
    variant: "outlineprimary",
  },
};

/**
 * 🏗️ Outline Secondary
 */
export const OutlineSecondary: Story = {
  args: {
    label: "Outline Secondary",
    variant: "outlinesecondary",
  },
};

/**
 * 🏗️ Outline Danger
 */
export const OutlineDanger: Story = {
  args: {
    label: "Outline Danger",
    variant: "outlinedanger",
  },
};

/**
 * 🚫 Disabled Button
 */
export const Disabled: Story = {
  args: {
    label: "Disabled",
    variant: "primary",
    disabled: true,
  },
};

/**
 * 🎨 Custom Class Example
 */
export const CustomClass: Story = {
  args: {
    label: "Custom Styled",
    variant: "primary",
    className: "bg-purple-500 hover:bg-purple-600 text-white",
  },
};

/**
 * 🖱️ Clickable Button with Action
 */
export const Clickable: Story = {
  args: {
    label: "Click Me",
    variant: "primary",
    onClick: () => alert("Button clicked!"),
  },
};
