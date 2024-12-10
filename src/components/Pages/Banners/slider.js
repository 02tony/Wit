import React, { useState, useEffect } from "react";
import "./slider.css";

const images = [
  "/sliderImages/two.jpg",
  "/sliderImages/One.jpg",
  // "/sliderImages/one.jpeg",
  "/sliderImages/2.png",
  "/sliderImages/3.png",
  "/sliderImages/6.png",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
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
