import React from "react";
import PropTypes from "prop-types";
import "./CourseOverview.css"; // Move styles to a separate CSS file for better organization

// Main CourseOverview Component
const CourseOverview = () => {
  return (
    <div className="course-container">
      {/* Left Section */}
      <div className="course-left-section">
        <h1 className="course-title">Online Courses</h1>
        <p className="course-breadcrumb">home / online training</p>
        <p className="course-description">
          IT Education Centre is an award-winning internationally recognized
          Educational Training Centre that is well-renowned for its quality
          training in Networking, Cloud Technologies, HR Courses, and Software
          Development. We also provide comprehensive Placement Assistance and
          Corporate Courses considering the ever-changing technologies. Our
          courses consist of theoretical and practical infused with regular
          assessment. Discover the endless possibilities for using educational
          knowledge and get a flair to create the future of your dreams by
          taking Online Training in India. Gain the confidence needed to apply
          the skills and transform your career by working in top reputed firms.
          If you are considering making a glorious career, this may be the Best
          IT Training Provider Institute that is the stepping stone to your
          future success.
        </p>
        <div className="course-stars">⭐⭐⭐⭐⭐</div>
      </div>

      {/* Right Section */}
      <div className="course-right-section">
        <YoutubeEmbed embedId="ndDpjT0_IM0" />
      </div>
    </div>
  );
};

// YoutubeEmbed Component
export const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default CourseOverview;
