import { Meta, StoryObj } from "@storybook/react";
import { FaBeer, FaHeart } from "react-icons/fa";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    imageUrl: { control: "text" },
    buttonLabel: { control: "text" },
    rounded: { control: "boolean" },
    shadow: { control: "boolean" },
    color: { control: "color" },
    icon: {
      control: "select",
      options: [null, FaBeer, FaHeart],
      mapping: { Beer: FaBeer, Heart: FaHeart },
    },
    onClick: { action: "button clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Default Card (Basic)
export const Default: Story = {
  args: {
    title: "Default Card",
    description: "This is a simple card without an image or button.",
  },
};

// Card with Image
export const WithImage: Story = {
  args: {
    title: "Card with Image",
    description: "This card contains an image.",
    imageUrl: "https://via.placeholder.com/150",
  },
};

// Card with Icon
export const WithIcon: Story = {
  args: {
    title: "Card with Icon",
    description: "This card features an icon.",
    icon: FaBeer,
  },
};

// Card with Button Action
export const WithButton: Story = {
  args: {
    title: "Card with Button",
    description: "This card includes a button.",
    buttonLabel: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};

// Full-featured Card
export const FullFeatured: Story = {
  args: {
    title: "Full-Featured Card",
    description: "This card has an image, an icon, and a button.",
    imageUrl: "https://via.placeholder.com/150",
    icon: FaHeart,
    buttonLabel: "Explore",
    onClick: () => alert("Explore clicked!"),
    rounded: true,
    shadow: true,
  },
};
