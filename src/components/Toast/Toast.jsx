import { useEffect } from "react";
import "./Toast.css";

export function Toast({
  message,
  variant = "success",
  duration = 3000,
  onClose,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    <div
      className={`toast toast-${variant}`}
      role="alert"
      aria-live="assertive"
    >
      <span>{message}</span>

      <button
        className="toast-close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}