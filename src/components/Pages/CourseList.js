import React, { useState } from "react";
import Header from "../Header";
import Footer from "../home/footer";

import GoogleFormEmbed from "./GoogleForm/googleform";
import "./Courses.css";
const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleRegisterClick = (course) => {
    setSelectedCourse(course);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setSelectedCourse(null);
    setShowForm(false);
  };

  const courses = [
    {
      title: "Python Programming",
      description: "A comprehensive Python course for all levels.",
      image: "/Courses /python logo.png",
      highlights: [
        "Core Python concepts",
        "OOP & Advanced Topics",
        "Data Analysis & ML Basics",
      ],
      duration: "8 Weeks",
      lectures: "50+",
      students: "23,564 Enrolled",
      rating: "4.9/5",
    },
    {
      title: "Java Programming",
      description: "Master Java for enterprise-grade applications.",
      image: "/Courses /Core-Java-Pro.jpg",
      highlights: ["OOP in Java", "Spring Framework", "Database Integration"],
      duration: "10 Weeks",
      lectures: "40+",
      students: "18,230 Enrolled",
      rating: "4.8/5",
    },
    {
      title: "Web Development",
      description: "Learn front-end and back-end web development.",
      image: "/Courses /webdevelopment.png",
      highlights: ["HTML, CSS, JavaScript", "React & Node.js", "API Integration"],
      duration: "12 Weeks",
      lectures: "60+",
      students: "25,000 Enrolled",
      rating: "4.7/5",
    },
    {
      title: "Full Stack Development",
      description: "End-to-end full stack developer training.",
      image: "/Courses /Mernstack.png",
      highlights: ["Frontend & Backend", "Deployment Techniques", "Agile Practices"],
      duration: "14 Weeks",
      lectures: "70+",
      students: "20,000 Enrolled",
      rating: "4.9/5",
    },
  ];

  return (
    <div>
      <Header />
      <main className="course-grid-container">
        <div className="course-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <div className="course-details">
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <ul>
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
                <p className="course-meta">
                  <strong>Duration:</strong> {course.duration} |{" "}
                  <strong>Rating:</strong> {course.rating}
                </p>
              </div>
              <div className="overlay">
                <button
                  className="register-button"
                  onClick={() => handleRegisterClick(course)}
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />

      {showForm && (
        <Modal isVisible={showForm} onClose={handleFormClose}>
          <div className="course-modal-content">
            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.description}</p>
            <p>
              <strong>Duration:</strong> {selectedCourse.duration} |{" "}
              <strong>Rating:</strong> {selectedCourse.rating}
            </p>
            <ul>
              {selectedCourse.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <GoogleFormEmbed showForm={showForm} onClose={handleFormClose} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CourseList;
