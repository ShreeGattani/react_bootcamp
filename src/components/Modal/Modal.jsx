import { useEffect } from "react";
import "./Modal.css";

export function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      data-testid="modal-overlay"
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        data-testid="modal-content"
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        <button
          className="close-button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}