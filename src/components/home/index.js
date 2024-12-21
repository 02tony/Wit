import React from "react";
import Header from '../Header';
import Footer from './footer';
import Slider from '../Pages/Banners/slider';
import CourseOverview from './courseOverview/courseOverview';
// import JobOrientedCourses from './orientation/categories';
import Carousel from './courseslist/courseList';
import StudentBenefits from './testimonials/testimonials';

export function Home() {

  return (
    <div>
      <div  style={{position:"fixed" ,display:"contents"}}>
      <Header />
      </div>

      <div>
        <Slider />
      </div>
      <div>
        <CourseOverview />
      </div>
      {/* 
      <div style={{ marginTop: '10%' }}>
        <JobOrientedCourses />
      </div> */}
      <div>
        <Carousel />
      </div>
      <div >
        <StudentBenefits />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
