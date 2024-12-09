// Home.js
import React from 'react';
import Header from '../Header';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Footer from './footer';
// import Banner from '../banner';
// import Banner from 'src/components/Banner/banner';
import Banner from '../Pages/banner';
import PopularCategories  from '../category';
import Courses from '../category/course';
import Slider from '../Pages/Banners/slider';
import CourseOverview from './courseOverview/courseOverview';
import JobOrientedCourses from './orientation/categories';
import Carousel from './courseslist/courseList';
import GoogleFormEmbed from '../Pages/GoogleForm/googleform';
import StudentBenefits from './testimonials/testimonials';
// import theme
// import JobOrientedCourses from './courseOverview/courseOverview'
export function Home() {
  return (
    <div>
      <Header />
      {/* <GoogleFormEmbed/> */}
      <Slider />
      <CourseOverview />
      {/* <Banner /> */}
      <scroll> 
        <div style={{marginTop:'10%'}}>
        <JobOrientedCourses/>
        </div>
        <div style={{marginTop:'10%'}}>
        <Carousel/>
        </div>
        <div style={{marginTop:'10%'}}>
          <StudentBenefits/>
        </div>
        {/* <div style={{paddingTop:'15%' ,paddingBottom:'10%'}}>
        <PopularCategories/>
        <Courses/>
        </div> */}
        <div style={{}}>
        <Footer />
        </div>
      </scroll>
    </div>
  );
}
