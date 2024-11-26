import React from 'react';
import Header from '../Header';
import Footer from '../home/footer';

const CourseList = () => {
  const courses = [
    { id: 1, title: 'Course 1', description: 'Description of Course 1' },
    { id: 2, title: 'Course 2', description: 'Description of Course 2' },
    // Add more courses as needed
  ];

  return (
    <div>
      <div>
      <Header />
      </div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
      <div style={{display:'flex'}}>
        <Footer />
      </div>
    </div>
  );
};

export default CourseList;