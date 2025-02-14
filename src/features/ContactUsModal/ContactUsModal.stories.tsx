import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import ContactUsModal from "./ContactUsModal";

const meta: Meta<typeof ContactUsModal> = {
  title: "Components/ContactUsModal",
  component: ContactUsModal,
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls whether the modal is visible",
    },
    onClose: {
      action: "Modal closed",
      description: "Called when the modal is closed",
    },
  },
};

export default meta;

/**
 * 📌 Template for interactive control over `isOpen`
 */
const Template: StoryFn<typeof ContactUsModal> = (args) => {
  const [open, setOpen] = useState(args.isOpen);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 bg-blue-500 text-white rounded-md"
      >
        Open Contact Modal
      </button>
      <ContactUsModal {...args} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

/**
 * 🏠 Default Story (Closed Initially)
 */
export const Default = Template.bind({});
Default.args = { isOpen: false };

/**
 * 📬 Open Modal Example
 */
export const OpenModal = Template.bind({});
OpenModal.args = { isOpen: true };

/**
 * ✍️ Simulating User Input (Pre-filled Fields)
 */
export const PrefilledForm = Template.bind({});
PrefilledForm.args = {
  isOpen: true,
};
PrefilledForm.decorators = [
  (Story) => {
    return (
      <div>
        <Story />
        <script>
          {`
            setTimeout(() => {
              document.querySelector("[name='firstName']").value = "John";
              document.querySelector("[name='lastName']").value = "Doe";
              document.querySelector("[name='email']").value = "john@example.com";
              document.querySelector("[name='bookingId']").value = "123456";
              document.querySelector("[name='reason']").value = "support";
              document.querySelector("[name='message']").value = "Need help with my booking.";
            }, 500);
          `}
        </script>
      </div>
    );
  },
];

/**
 * 🛠️ Testing Submission Behavior
 */
export const FormSubmission = Template.bind({});
FormSubmission.args = { isOpen: true };
FormSubmission.decorators = [
  (Story) => {
    return (
      <div>
        <Story />
        <script>
          {`
            document.querySelector("form").addEventListener("submit", (e) => {
              e.preventDefault();
              alert("Form submitted!");
            });
          `}
        </script>
      </div>
    );
  },
];
