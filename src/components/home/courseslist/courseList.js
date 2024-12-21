import React from "react";
import { useNavigate } from "react-router-dom";
import "./courseList.css";
import {
  PythonCourse,
  JavaCourse,
  WebDevelopmentCourse,
  SQLCourse,
  AptitudeSkills,
  CommunicationSkills,
} from "../../Pages/Courses";

const Carousel = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Python",
      subtext: "Read More",
      // img: "/CourseImages/pythonfimg.webp",
      path: "/PythonCourse",
      video: "/CourseImages/PythonFlipper.mp4",
      component: PythonCourse,
    },
    {
      title: "Java",
      subtext: "Read More",
      // img: "/CourseImages/javaimg.png",
      video:'/CourseImages/JavaVideo.mp4',
      path: "/JavaCourse",
      component: JavaCourse,
    },
    {
      title: "Web Development",
      subtext: "Read More",
      // img: "/CourseImages/webdevelopment.jpg",
      video:'/CourseImages/webDev.mp4',
      path: "/WebDevelopmentCourse",
      component: WebDevelopmentCourse,
    },
    {
      title: "SQL",
      subtext: "Read More",
      // img: "/CourseImages/webdevelopment.jpg",
      video:'/CourseImages/SQL.mp4',
      path: "/SQLCourse",
      component: SQLCourse,
    },
    {
      title: "Aptitude Skills",
      subtext: "Read More",
      // img: "/CourseImages/webdevelopment.jpg",
      video:'/CourseImages/Apti.mp4',
      path: "/AptitudeSkills",
      component: AptitudeSkills,
    },
    {
      title: "Communication Skills",
      subtext: "Read More",
      img: "/CourseImages/communication.svg",
      path: "/CommunicationSkills",
      component: CommunicationSkills,
    },

  ];

  const handleCardClick = (path) => {
    navigate(path); // Navigate to the course path
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Our Software Courses</h1>
      <hr className="carousel-underline" />
      <div className="carousel">
        <div className="carousel-items">
          {courses.map((course, index) => (
            <div className="carousel-item" key={index}>
              <div className="card" onClick={() => handleCardClick(course.path)}>
                <div className="content">
                  <div className="front">
                  {course.video ? (
                      <video
                        className="carousel-video"
                        // controls
                        // muted
                        loop
                        autoPlay
                        poster={course.img}
                      >
                        <source src={course.video} type="video/mp4"  />
                        Your browser does not support the video tag.
                      </video>
                     ) : (
                      <img
                        src={course.img}
                        alt={course.title}
                        className="carousel-image"
                      />
                    )} 
                    <p className="carousel-text">{course.title}</p>
                  </div>
                  <div className="back">
                    <button className="animated-button">
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
    </div>
  );
};

export default Carousel;
