import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    title: {
      control: "text",
      defaultValue: "Test Modal",
      description: "The title displayed in the modal header",
    },
    isOpen: {
      control: "boolean",
      defaultValue: true,
      description: "Controls whether the modal is visible",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

/**
 * 📌 Template for interactive control over `isOpen`
 */
const Template: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = useState(args.isOpen);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 bg-blue-500 text-white rounded-md"
      >
        Open Modal
      </button>
      <Modal {...args} isOpen={open} onClose={() => setOpen(false)}>
        <p className="text-center text-gray-700">This is a modal content.</p>
      </Modal>
    </>
  );
};

/**
 * 📝 Custom Title Modal
 */
export const CustomTitle = Template.bind({});
CustomTitle.args = {
  isOpen: true,
  title: "Custom Modal Title",
};
