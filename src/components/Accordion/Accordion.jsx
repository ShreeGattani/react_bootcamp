import React, { useState } from "react";
import "./Accordion.css";

export function Accordion({
  items,
  allowMultiple = false,
  className = "",
  ...props
}) {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(id) ? [] : [id]
      );
    }
  };

  return (
    <div className={`accordion ${className}`} {...props}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div key={item.id} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
                +
              </span>
            </button>

            {isOpen && (
              <div className="accordion-content">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}