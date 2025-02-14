import React, { useState } from "react";
import { theme } from "@/theme";
import Card from "@/components/Card/Card";
import { FaRegSmile, FaTicketAlt, FaUserShield, FaChild } from "react-icons/fa";
import ContactUsModal from "@/features/ContactUsModal/ContactUsModal";
import { useRouter } from "next/navigation";

const HelpOptionsGrid = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const router = useRouter();

  const handleContactUsClick = () => {
    setIsContactModalOpen(true);
  };

  const closeContactUsModal = () => {
    setIsContactModalOpen(false);
  };

  const options = [
    {
      title: "Request a refund",
      icon: FaRegSmile,
      onClick: () => {
        router.push("/refund");
      },
    },
    { title: "Manage your bookings", icon: FaTicketAlt, onClick: () => {} },
    { title: "Route and delay info", icon: FaUserShield, onClick: () => {} },
    { title: "Payment Problems", icon: FaChild, onClick: () => {} },
    { title: "Baggage", icon: FaChild, onClick: () => {} },
    { title: "Book a ticket", icon: FaChild, onClick: () => {} },
    { title: "Vouchers", icon: FaChild, onClick: () => {} },
    { title: "Feedback", icon: FaChild, onClick: () => {} },
    { title: "Booking for Children", icon: FaChild, onClick: () => {} },
    { title: "Passengers with disabilities", icon: FaChild, onClick: () => {} },
    { title: "Security", icon: FaChild, onClick: () => {} },
    { title: "Contact Us", icon: FaChild, onClick: handleContactUsClick },
  ];

  return (
    <div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${theme.spacing.md}`}
      >
        {options.map((option, index) => (
          <Card
            key={index}
            title={option.title}
            icon={option.icon}
            onClick={option.onClick}
            buttonLabel="Learn More"
            shadow
            rounded
          />
        ))}
      </div>

      {/* Contact Us Modal */}
      {isContactModalOpen && (
        <ContactUsModal
          isOpen={isContactModalOpen}
          onClose={closeContactUsModal}
        />
      )}
    </div>
  );
};

export default HelpOptionsGrid;
