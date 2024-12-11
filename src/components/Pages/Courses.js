import React, { useState } from "react";
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


const CourseDetails = ({ course, onClose }) => {
  const [showForm, setShowForm] = useState(false);

  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => {
    setShowForm(false);
    onClose();
  };

  return (
    <>
      <Modal isVisible={true} onClose={onClose}>
        <div className="course-container">
          <div className="course-header">
            <h1>{course.title}</h1>
            <p>{course.description}</p>
          </div>
          <div className="course-stats">
            <p>
              <strong>{course.totalStudents} Total Students</strong>
            </p>
            <p>
              Rating: ⭐⭐⭐⭐⭐ ({course.reviews} Reviews)
            </p>
          </div>
          <div className="course-content">
            <h2>What you’ll learn:</h2>
            <ul>
              {course.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
          <div className="course-details">
            <p>Lectures: {course.lectures}</p>
            <p>Quizzes: {course.quizzes}</p>
            <p>Duration: {course.duration}</p>
            <p>Assessments: {course.assessments ? "Yes" : "No"}</p>
          </div>
          <button className="register-button" onClick={handleFormOpen}>
            Register
          </button>
        </div>
      </Modal>
      <GoogleFormEmbed showForm={showForm} onClose={handleFormClose} />
    </>
  );
};


export const PythonCourse = ({ onClose }) => (
  <CourseDetails
    course={{
      title: "Python Course Details",
      description:
        "Master Python programming with our comprehensive course. Learn to create efficient solutions for real-world problems with hands-on practice.",
      totalStudents: "23,564",
      reviews: "1254",
      topics: [
        "Basics of Python programming.",
        "Object-Oriented Programming in Python.",
        "Web development with Django/Flask.",
        "Data analysis and visualization with Pandas and Matplotlib.",
        "Machine Learning foundations.",
      ],
      lectures: 12,
      quizzes: 5,
      duration: "8 weeks",
      assessments: true,
    }}
    onClose={onClose}
  />
);

export const JavaCourse = ({ onClose }) => (
  <CourseDetails
    course={{
      title: "Java Course Details",
      description:
        "Learn Java programming from scratch and become proficient in building robust, high-performance applications.",
      totalStudents: "15,348",
      reviews: "1023",
      topics: [
        "Introduction to Java programming.",
        "Core Java concepts like OOPs and Exception Handling.",
        "Building desktop applications using JavaFX.",
        "Backend development with Spring Boot.",
        "Integrating APIs with RESTful services.",
      ],
      lectures: 15,
      quizzes: 4,
      duration: "10 weeks",
      assessments: true,
    }}
    onClose={onClose}
  />
);

export const WebDevelopmentCourse = ({ onClose }) => (
  <CourseDetails
    course={{
      title: "Web Development Course Details",
      description:
        "Build modern and responsive websites from scratch. Learn front-end and back-end development with hands-on projects.",
      totalStudents: "18,721",
      reviews: "984",
      topics: [
        "HTML5, CSS3, and JavaScript basics.",
        "Responsive design with Bootstrap and Flexbox.",
        "Client-side frameworks like React.js.",
        "Server-side development with Node.js and Express.",
        "Database integration with MongoDB.",
      ],
      lectures: 20,
      quizzes: 6,
      duration: "12 weeks",
      assessments: true,
    }}
    onClose={onClose}
  />
);

export const TestingCourse = ({ onClose }) => (
  <CourseDetails
    course={{
      title: "Software Testing Course Details",
      description:
        "Master the art of quality assurance and testing with a comprehensive course designed for aspiring QA professionals.",
      totalStudents: "12,645",
      reviews: "845",
      topics: [
        "Manual testing methodologies.",
        "Test automation with Selenium.",
        "API testing with Postman and Rest Assured.",
        "Performance testing using JMeter.",
        "Bug tracking and reporting with Jira.",
      ],
      lectures: 10,
      quizzes: 4,
      duration: "8 weeks",
      assessments: true,
    }}
    onClose={onClose}
  />
);

export const FullStackCourse = ({ onClose }) => (
  <CourseDetails
    course={{
      title: "Full Stack Development Course Details",
      description:
        "Become a full-stack developer by mastering front-end and back-end technologies, databases, and deployment strategies.",
      totalStudents: "20,489",
      reviews: "1321",
      topics: [
        "HTML, CSS, and JavaScript for front-end development.",
        "React.js for creating dynamic user interfaces.",
        "Node.js and Express for building RESTful APIs.",
        "MongoDB for database management.",
        "DevOps basics and cloud deployment.",
      ],
      lectures: 25,
      quizzes: 7,
      duration: "14 weeks",
      assessments: true,
    }}
    onClose={onClose}
  />
);
