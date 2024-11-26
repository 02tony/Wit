import React from "react";

const JobOrientedCourses = () => {
  return (
    <div style={styles.container}>
      {/* Title Section */}
      <h1 style={styles.title}>Job Oriented Courses</h1>
      <hr style={styles.titleUnderline} />

      {/* Slider Section */}
      <div style={styles.slider}>
        <img
          src="https://via.placeholder.com/600x300?text=Development+Job+Guarantee"
          alt="Development Job Guarantee"
          style={styles.sliderImage}
        />
        <img
          src="https://via.placeholder.com/600x300?text=Networking+Job+Guarantee"
          alt="Networking Job Guarantee"
          style={styles.sliderImage}
        />
      </div>

      {/* Feature Cards Section */}
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <img
            src="https://via.placeholder.com/50?text=Classroom"
            alt="Classroom Batch Training"
            style={styles.cardImage}
          />
          <p style={styles.cardText}>Classroom Batch Training</p>
        </div>
        <div style={styles.card}>
          <img
            src="https://via.placeholder.com/50?text=Online"
            alt="Online Training"
            style={styles.cardImage}
          />
          <p style={styles.cardText}>Online Training</p>
        </div>
        <div style={styles.card}>
          <img
            src="https://via.placeholder.com/50?text=Job"
            alt="Job-Oriented Training"
            style={styles.cardImage}
          />
          <p style={styles.cardText}>Job-Oriented Training</p>
        </div>
        <div style={styles.card}>
          <img
            src="https://via.placeholder.com/50?text=Corporate"
            alt="Corporate Training"
            style={styles.cardImage}
          />
          <p style={styles.cardText}>Corporate Training</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={styles.buttonContainer}>
        <button style={styles.enrollButton}>Enroll Now</button>
        <button style={styles.demoButton}>Free Demo Classes</button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    width: "100%",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  titleUnderline: {
    width: "50px",
    margin: "10px auto",
    border: "1px solid red",
  },
  slider: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "20px 0",
  },
  sliderImage: {
    width: "45%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "20px 0",
    gap: "20px",
  },
  card: {
    width: "200px",
    height: "150px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  cardImage: {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#555",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  enrollButton: {
    backgroundColor: "#ff5722",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    margin: "0 10px",
  },
  demoButton: {
    backgroundColor: "#ffa726",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    margin: "0 10px",
  },
};

export default JobOrientedCourses;
