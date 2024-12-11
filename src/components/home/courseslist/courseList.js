import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./courseList.css";
import { PythonCourse, JavaCourse, WebDevelopmentCourse, FullStackCourse,TestingCourse  } from "../../Pages/Courses";

const Carousel = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { title: "Python", subtext: "Read More", img: "/CourseImages/pythonfimg.webp", path: "/course/python", component: PythonCourse },
    { title: "Java", subtext: "Read More", img: "/CourseImages/javaimg.png", path: "/course/java", component: JavaCourse },
    { title: "Web Development", subtext: "Read More", img: "/CourseImages/webdevelopment.jpg", path: "/course/webdev",component:WebDevelopmentCourse },
    { title: "Testing", subtext: "Read More", img: "/CourseImages/Testing.jpeg", path: "/course/testing",component: TestingCourse},
    { title: "Full Stack", subtext: "Read More", img: "/CourseImages/FullStack.png", path: "/course/fullstack",component: FullStackCourse},
    // Add more courses here with respective components if needed.
  ];

  const handleCardClick = (course) => {
    console.log("course",course);
    
    setSelectedCourse(course);
  };

  const handleClose = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Our Software Courses</h1>
      <hr className="carousel-underline" />
      <div className="carousel">
        <div className="carousel-items">
          {courses.map((course, index) => (
            <div className="carousel-item" key={index}>
              <div className="card" onClick={() => handleCardClick(course)}>
                <div className="content">
                  <div className="front">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="carousel-image"
                      style={{ height: "75%", width: "75%" }}
                    />
                    <p className="carousel-text">{course.title}</p>
                  </div>
                  <div className="back">
                    <button  className="animated-button ">
                    <span>{course.subtext}</span>
                    <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
  <div className="modal-overlay">
    <div className="modal-content">
      {/* <button className="close-button" onClick={handleClose}>
        ✖
      </button> */}
      <selectedCourse.component onClose={handleClose} />
    </div>
  </div>
)}

    </div>
  );
};

export default Carousel;
