import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    buttonClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "Enter text...",
    name: "default",
    onChange: (e) => console.log(e.target.value),
  },
};

export const WithButton: Story = {
  args: {
    value: "",
    placeholder: "Search...",
    name: "search",
    buttonName: "Go",
    buttonClick: () => console.log("Button clicked"),
    onChange: (e) => console.log(e.target.value),
  },
  decorators: [(Story) => <Story />],
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    value: "",
    placeholder: "Enter password...",
    name: "password",
    onChange: (e) => console.log(e.target.value),
  },
};
