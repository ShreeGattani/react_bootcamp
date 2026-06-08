import React from "react";
import "./ToggleSwitch.css";

export function ToggleSwitch({
  id = "toggle",
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  ...props
}) {
  return (
    <div className="toggle-switch" {...props}>
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />

      <label htmlFor={id} className="toggle-track">
        <span className="toggle-thumb"></span>
      </label>

      {label && (
        <label htmlFor={id} className="toggle-label">
          {label}
        </label>
      )}
    </div>
  );
}