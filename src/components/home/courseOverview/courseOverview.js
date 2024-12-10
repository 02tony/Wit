import React from "react";
import PropTypes from "prop-types";

// Main CourseOverview Component
const CourseOverview = () => {
  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <div style={{ marginTop: "-15%" }}>
          <h1 style={styles.title}>Online Courses</h1>
          <p style={styles.breadcrumb}>home / online training</p>
          <p style={styles.description}>
            IT Education Centre is an award-winning internationally recognized
            Educational Training Centre that is well-renowned for its quality
            training in Networking, Cloud Technologies, HR Courses, and
            Software Development. We also provide comprehensive Placement
            Assistance and Corporate Courses considering the ever-changing
            technologies. Our courses consist of theoretical and practical
            infused with regular assessment. Discover the endless possibilities
            for using educational knowledge and get a flair to create the
            future of your dreams by taking Online Training in India. Gain the
            confidence needed to apply the skills and transform your career by
            working in top reputed firms. If you are considering making a
            glorious career, this may be the Best IT Training Provider Institute
            that is the stepping stone to your future success.
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

// Responsive Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Default to column layout for mobile
    width: "100%",
    marginTop: "1%",
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
    fontSize: "2rem", // Adjusted for responsiveness
    fontWeight: "bold",
    marginBottom: "10px",
  },
  breadcrumb: {
    fontSize: "0.8rem", // Slightly smaller for smaller screens
    marginBottom: "20px",
    fontStyle: "italic",
  },
  description: {
    fontSize: "0.9rem", // Smaller font for mobile
    lineHeight: "1.5",
    marginBottom: "20px",
  },
  stars: {
    fontSize: "1.2rem",
    marginTop: "10px",
  },
  rightSection: {
    flex: 1,
    backgroundColor: "#5c5f8f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px", // Added padding for better spacing
  },
  videoResponsive: {
    width: "90%", // Full width for mobile
    maxWidth: "560px", // Limit size on larger screens
    height: "auto",
  },
  // Media queries for responsiveness
  "@media (min-width: 768px)": {
    container: {
      flexDirection: "row", // Side-by-side layout for tablets and above
      height: "50vh",
    },
    title: {
      fontSize: "2.5rem", // Larger heading for tablets
    },
    description: {
      fontSize: "1rem", // Slightly larger for better readability
    },
    videoResponsive: {
      width: "80%", // Adjust video size
    },
  },
  "@media (min-width: 1024px)": {
    container: {
      height: "60vh", // Increase height for desktops
    },
    title: {
      fontSize: "3rem", // Even larger heading for desktops
    },
    description: {
      fontSize: "1.1rem",
    },
  },
};

export default CourseOverview;
