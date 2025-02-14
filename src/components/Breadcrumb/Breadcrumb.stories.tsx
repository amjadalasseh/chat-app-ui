import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    pathname: { control: "text" }, // ✅ Ensure `pathname` is always defined
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

/**
 * 📌 Template for interactive breadcrumb navigation
 */
const Template: StoryFn<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

/**
 * 🏠 Default Breadcrumb
 */
export const Default = Template.bind({});
Default.args = {
  pathname: "/home/products/shoes", // ✅ Ensure `pathname` is defined
};
