import React from "react";
import PropTypes from "prop-types";

// Main CourseOverview Component
const CourseOverview = () => {
  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <div style={{marginTop:'-15%'}}>
        <h1 style={styles.title}>Online Courses</h1>
        <p style={styles.breadcrumb}>home / online training</p>
        <p style={styles.description}>
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
        <div style={styles.stars}>⭐⭐⭐⭐⭐</div>
        </div>
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        <YoutubeEmbed embedId="ndDpjT0_IM0" />
      </div>
    </div>
  );
};

// YoutubeEmbed Component
export const YoutubeEmbed = ({ embedId }) => (
  <div style={styles.videoResponsive}>
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

// Styles
const styles = {
  container: {
    display: "flex",
    width: "100%",
    // padding: "20px",
    marginTop:'1%',
    height: "50vh",
  },
  leftSection: {
    flex: 1,
    backgroundColor: "#131536",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  breadcrumb: {
    fontSize: "0.9rem",
    marginBottom: "20px",
    fontStyle: "italic",
  },
  description: {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  stars: {
    fontSize: "1.5rem",
    marginTop: "10px",
  },
  rightSection: {
    flex: 1,
    backgroundColor: "#5c5f8f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  videoResponsive: {
    width: "80%",
    height: "auto",
  },
};

export default CourseOverview;
