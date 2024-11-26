import React, { useState, useRef, useEffect } from "react";
import "./courseList.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Tracks the current slide
  const carouselRef = useRef(null); // Reference to the carousel items container

  const courses = [
    { title: "C++ Programming", subtext: "Certification & Training", img: "https://via.placeholder.com/200x200?text=C++" },
    { title: "Full Stack", subtext: "Certification & Training", img: "https://via.placeholder.com/200x200?text=Full+Stack" },
    { title: "Angular JS", subtext: "Certification & Training", img: "https://via.placeholder.com/200x200?text=AngularJS" },
    { title: "JavaScript Development", subtext: "Certification & Training", img: "https://via.placeholder.com/200x200?text=JavaScript" },
    { title: "Mobile Development", subtext: "Certification & Training", img: "https://via.placeholder.com/200x200?text=Mobile" },
    { title: "Web Development", subtext: "Certification & Training", img: "https://via.placeholder.com/200x200?text=Web" },
    { title: "AWS", subtext: "Certification & Training", img: "https://via.placeholder.com/200x200?text=Web" },
    { title: "Python", subtext: "Certification & Training", img: "https://via.placeholder.com/200x200?text=Web" },
  ];


  const handleScroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = container.offsetWidth; // Scroll by the width of the container
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else {
      container.scrollLeft += scrollAmount;
      setActiveIndex((prev) => Math.min(prev + 1, courses.length - 1));
    }
  };

  const handleDotClick = (index) => {
    const container = carouselRef.current;
    const scrollAmount = container.offsetWidth * index;
    container.scrollLeft = scrollAmount;
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % courses.length; // Loop back to the first slide
        const container = carouselRef.current;
        const scrollAmount = container.offsetWidth * newIndex;
        container.scrollLeft = scrollAmount;
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [courses.length]);

  return (
    <div className="carousel-container">
      {/* Title Section */}
      <h1 className="carousel-title">Software Courses</h1>
      <hr className="carousel-underline" />

      {/* Carousel Section */}
      <div className="carousel">
        <button
          className="carousel-button carousel-button-left"
          onClick={() => handleScroll("left")}
          disabled={activeIndex === 0}
        >
          ❮
        </button>
        <div className="carousel-items" ref={carouselRef}>
          {courses.map((course, index) => (
            <div className="carousel-item" key={index}>
              <img
                src={course.img}
                alt={course.title}
                className="carousel-image"
              />
              <p className="carousel-text">{course.title}</p>
              <p className="carousel-subtext">{course.subtext}</p>
            </div>
          ))}
        </div>
        <button
          className="carousel-button carousel-button-right"
          onClick={() => handleScroll("right")}
          disabled={activeIndex === courses.length - 1}
        >
          ❯
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="carousel-dots">
        {courses.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      {/* Button Section */}
      <button className="view-courses-button">View all Software Courses</button>
    </div>
  );
};

export default Carousel;
