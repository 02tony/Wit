import React, { useState } from "react";
import {
  PythonCourse,
  JavaCourse,
  WebDevelopmentCourse,
  TestingCourse,
  FullStackCourse,
} from "../../../Pages/Courses";
import "./CourseGrid.css";

const CourseGrid = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      title: "Python Programming",
      description: "Learn Python from scratch!",
      image: "/svgs/Certification-cuate.svg",
      component: PythonCourse,
    },
    {
      title: "Java Programming",
      description: "Master Java development.",
      image: "/svgs/Certification-cuate.svg",
      component: JavaCourse,
    },
    {
      title: "Web Development",
      description: "Become a web developer.",
      image: "/svgs/Certification-cuate.svg",
      component: WebDevelopmentCourse,
    },
    {
      title: "Software Testing",
      description: "Testing techniques explained.",
      image: "/svgs/Certification-cuate.svg",
      component: TestingCourse,
    },
    {
      title: "Full Stack Development",
      description: "Complete full stack training.",
      image: "/svgs/Certification-cuate.svg",
      component: FullStackCourse,
    },
  ];

  const handleCourseSelect = (CourseComponent) => {
    setSelectedCourse(() => CourseComponent);
  };

  const handleModalClose = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="course-grid">
      {courses.map((course, index) => (
        <div key={index} className="course-card">
          <div className="course-details">
            <h3>{course.title}</h3>
            <p>
              {/* {course.description} */}
              What you'll learn
                Identify core aspects of programming and features of the Python language

                Understand and apply core programming concepts like data structures, conditionals, loops, variables, and functions

                Use different tools for writing and running Python code

                Design and write fully-functional Python programs using commonly used data structures, custom functions, and reading and writing to files
            </p>
            
          </div>
          
          <button
            className="register-button"
            onClick={() => handleCourseSelect(course.component)}
          >
            Register
          </button>
        </div>
      ))}
      {selectedCourse && <selectedCourse onClose={handleModalClose} />}
    </div>
  );
};

export default CourseGrid;
// import React, { useState } from "react";
// import "./CourseGrid.css";

// const CourseGrid = () => {
//   const courses = [
//     {
//       title: "Python Programming",
//       description: "Learn Python from scratch!",
//       image: "/svgs/Certification-cuate.svg",
//       details: [
//         "Learn Python basics",
//         "Object-oriented programming",
//         "Data analysis with Python",
//       ],
//       duration: "12 weeks",
//       lectures: 20,
//       quizzes: 6,
//       assessments: "Yes",
//     },
//     {
//       title: "Web Development",
//       description: "Build modern websites!",
//       image: "/svgs/Certification-cuate.svg",
//       details: [
//         "HTML, CSS3, and JavaScript basics",
//         "Responsive design with Bootstrap",
//         "Server-side development with Node.js",
//       ],
//       duration: "12 weeks",
//       lectures: 20,
//       quizzes: 6,
//       assessments: "Yes",
//     },
//   ];

//   return (
//     <div className="course-grid">
//       {courses.map((course, index) => (
//         <div key={index} className="course-card">
//           {/* Register button on top */}
//           {/* <button className="register-button-top">Register</button> */}

//           {/* Course image */}
//           <div className="course-image">
//             <img src={course.image} alt={course.title} />
//           </div>

//           {/* Course details (shown normally) */}
//           <div className="course-details">
//             <h3>{course.title}</h3>
//             <p>{course.description}</p>
//           </div>

//           {/* Hover details (expands when hovered) */}
//           <div className="course-hover-details">
//             <h3>{course.title} Details</h3>
//             <p>{course.description}</p>
//             <ul className="details-list">
//               {course.details.map((detail, i) => (
//                 <li key={i}>✔ {detail}</li>
//               ))}
//             </ul>
//             <p>
//               <strong>Duration:</strong> {course.duration} <br />
//               <strong>Lectures:</strong> {course.lectures} <br />
//               <strong>Quizzes:</strong> {course.quizzes} <br />
//               <strong>Assessments:</strong> {course.assessments}
//             </p>
//             <button className="register-button">REGISTER</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CourseGrid;
