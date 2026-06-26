import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/916392377675"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsappIcon;