import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./slider.css";

const images = [
  "/Dark Blue Modern Programming Presentation/1.png",
  "/Dark Blue Modern Programming Presentation/2.png",
  "/Dark Blue Modern Programming Presentation/4.png",
  "/Dark Blue Modern Programming Presentation/3.png",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  useEffect(() => {
    if (!isAutoSliding) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(timer);
  }, [isAutoSliding]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoSliding(false); // Disable auto-slider
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  const handleSwipe = (direction) => {
    setIsAutoSliding(false); // Disable auto-slider on swipe
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="slider" {...swipeHandlers}>
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
