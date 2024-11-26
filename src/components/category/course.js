// Courses.js
import React from 'react';
import './course.css';
import { FaUser, FaBook } from 'react-icons/fa';
// import './index.css';
const coursesData = [
  { id: 1, title: 'Fitness Development Strategy Buildup Laoreet', price: 'Free', students: 25, lessons: 6, rating: 1, imageUrl: 'image1.jpg' },
  { id: 2, title: 'Artificial Intelligence Fundamental Startup Justo', price: '$40.00', students: 33, lessons: 4, rating: 1, imageUrl: 'image2.jpg' },
  { id: 3, title: 'Computer Science Startup Varius et Commodo', price: '$35.00', students: 21, lessons: 7, rating: 1, imageUrl: 'image3.jpg' },
  { id: 4, title: 'Testy & Delicious Food Recipes', price: '$32.00', students: 20, lessons: 5, rating: 1, imageUrl: 'image4.jpg' },
  { id: 5, title: 'Lawyer Advance Mental', price: '$22.00', students: 27, lessons: 8, rating: 1, imageUrl: 'image5.jpg' },
  { id: 6, title: 'Computer Fundamentals Basics', price: '$28.00', students: 18, lessons: 6, rating: 1, imageUrl: 'image6.jpg' },
];

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="image-container">
        <img src={course.imageUrl} alt={course.title} />
        <span className={`price-tag ${course.price === 'Free' ? 'free' : ''}`}>
          {course.price}
        </span>
      </div>
      <div className="course-content">
        <div className="course-rating">
          {'⭐'.repeat(course.rating)} ({course.rating} rating)
        </div>
        <h3 className="course-title">{course.title}</h3>
        <div className="course-info">
          <span>
            <FaUser /> {course.students} Students
          </span>
          <span>
            <FaBook /> {course.lessons} Lessons
          </span>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="courses">
      <h2 className="section-title">Explore Popular Courses</h2>
      <div className="courses-grid">
        {coursesData.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
