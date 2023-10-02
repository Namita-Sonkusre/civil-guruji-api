import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
      <FaTimes className="close-icon" onClick={onClose} />
        {content}     
      </div>
    </div>
  );
};

export default Modal;
