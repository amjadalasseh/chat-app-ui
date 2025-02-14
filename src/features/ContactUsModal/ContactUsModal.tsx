import React, { useState } from "react";
import { theme } from "@/theme";
import Modal from "@/components/Modal/Modal";
import { Input } from "@/components/Input/Input";
import Button from "@/components/Button/Button";

const ContactUsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bookingId: "",
    reason: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} title="Contact Us" onClose={onClose}>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <Input
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          ariaLabel="First Name"
          variant="outlined"
          required
        />
        <Input
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          ariaLabel="Last Name"
          variant="outlined"
          required
        />
        <Input
          type="email"
          name="email"
          label="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          ariaLabel="Email Address"
          variant="outlined"
          required
        />
        <Input
          name="bookingId"
          label="Booking ID (if available)"
          value={formData.bookingId}
          onChange={handleInputChange}
          ariaLabel="Booking ID"
          variant="outlined"
        />
        <div>
          <label className="text-sm  mb-1 " htmlFor="reason">
            Contact Reason
            <select
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className={`${theme.input.base} rounded-md w-full`}
              aria-label="Contact Reason"
              required
            >
              <option value="">Select a reason</option>
              <option value="refund">Refund Request</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </label>
        </div>
        <div>
          <label className="text-sm  mb-1" htmlFor="message">
            Contact Reason
            <textarea
              name="message"
              placeholder="Enter additional details..."
              value={formData.message}
              onChange={handleInputChange}
              className={`${theme.input.base} rounded-md w-full`}
              rows={3}
            ></textarea>
          </label>
        </div>
        <Button label="Submit" variant="primary" onClick={() => handleSubmit} />
      </form>
    </Modal>
  );
};

export default ContactUsModal;
