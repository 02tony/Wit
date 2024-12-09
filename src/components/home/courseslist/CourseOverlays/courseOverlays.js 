import React from "react";

const CourseOverlay = ({ course, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{course.title}</h2>
        <img src={course.img} alt={course.title} className="course-detail-img" />
        <p>{course.description}</p>
        <button className="register-btn">Register Now</button>
      </div>
    </div>
  );
};

export default CourseOverlay;
