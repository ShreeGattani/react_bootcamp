import { useState } from "react";
import "./Carousel.css";

export function Carousel({ images = [], className = "", ...props }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const isEmpty = images.length === 0;

  const handleNext = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  if (isEmpty) {
    return (
      <div
        className={`carousel ${className}`}
        {...props}
      >
        <button disabled>Previous</button>
        <button disabled>Next</button>
      </div>
    );
  }

  const currentImage = images[activeIndex];

  return (
    <div
      className={`carousel ${className}`}
      {...props}
    >
      <div className="carousel-image-container">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="carousel-image"
        />
      </div>

      <div className="carousel-controls">
        <button
          onClick={handlePrevious}
          disabled={activeIndex === 0}
        >
          Previous
        </button>

        <span className="carousel-indicator">
          {activeIndex + 1} / {images.length}
        </span>

        <button
          onClick={handleNext}
          disabled={activeIndex === images.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}