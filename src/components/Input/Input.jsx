import React from "react";
import "./Input.css";

export const Input = ({
  placeholder = "",
  defaultValue = "",
  onChange,
  error,
  disabled = false,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) => {
  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e);
    }
  };

  return (
    <div className="input-wrapper">
      {leftIcon && <span className="left-icon">{leftIcon}</span>}

      <input
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={handleChange}
        className={[
          "input",
          error && "input-error",
          disabled && "input-disabled",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />

      {rightIcon && <span className="right-icon">{rightIcon}</span>}

      {error && (
        <div role="alert" className="error-message">
          {error}
        </div>
      )}
    </div>
  );
};