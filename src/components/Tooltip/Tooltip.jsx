import './Tooltip.css';
import React, { useState } from "react";

export function Tooltip({children , content}){
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
    className= "tooltip-wrapper"
    onMouseEnter={() => setIsVisible(true)}
    onMouseLeave={() => setIsVisible(false)}
    onFocus={() => setIsVisible(true)}
    onBlur={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <div className ="tooltip-content" role= "tooltip">
          {content}
          </div>
      )}
    </div>
  )  
}