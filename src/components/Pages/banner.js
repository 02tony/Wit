// Banner.js
import React from 'react';
import './banner.css'; // Add custom CSS
import FeatureCards from './FeatureCards';

export default function Banner() {
  return (
    <div>
    <div className="banner">
      {/* <div className="banner-content">
        <h3 className="banner-subtitle">START TO LEARNING TODAY</h3>
        <h1 className="banner-title">Online Courses From Leading Experts</h1>
        <button className="banner-button">Find Course</button>
      </div> */}
    </div>
    <div style={{margin :'-10%',zIndex:'auto'}} >
    <FeatureCards />
    </div>
    </div>
  );
}
