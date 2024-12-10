import React, { useState } from "react";

const JobOrientedCourses = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.container}>
      {/* Title Section */}
      <h1 style={styles.title}>Job Oriented Courses</h1>
      <hr style={styles.titleUnderline} />

      {/* Slider Section */}
      <div style={styles.slider}>
        <div style={styles.imageContainerForTop}>
          <img
            src="svgs/jobHunt.svg"
            alt="Development Job Guarantee"
            style={styles.sliderImage}
          />
          <p style={styles.overlayText}>Find right career</p>
        </div>
        <div style={styles.imageContainerForTop}>
          <img
            src="svgs/interview.svg"
            alt="Networking Job Guarantee"
            style={styles.sliderImage}
          />
          <p style={styles.overlayText}>Networking Job Guarantee</p>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div style={styles.cardsContainer}>
        {[
          { src: "svgs/Remote.svg", text: "Classroom Batch Training" },
          { src: "svgs/OnlineClass.svg", text: "Online Training" },
          { src: "svgs/CorporatesTraining.svg", text: "Job-Oriented Training" },
          { src: "svgs/training.svg", text: "Corporate Training" },
          { src: "/svgs/Certification-cuate.svg", text: "Certification Courses" },
        ].map((card, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(hoveredCard === index ? styles.cardHoverEffect : {}),
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.imageContainer}>
              <img src={card.src} alt={card.text} style={styles.cardImage} />
              <p style={styles.overlayText}>{card.text}</p>
            </div>
          </div>
        ))}
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
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
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
    marginBottom: "50px",
  },
  imageContainerForTop: {
    position: "relative",
    width: "450px",
    height: "350px",
    borderRadius: 10,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  },
  imageContainer: {
    position: "relative",
    width: "200px",
    height: "160px",
  },
  sliderImage: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  overlayText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#000000",
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0 2px 2px rgba(255, 255, 255, 0.9)",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "20px 0",
    gap: "20px",
    marginBottom: "50px",
  },
  card: {
    width: "200px",
    height: "150px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    transition: "transform 0.3s ease-in-out",
  },
  cardHoverEffect: {
    transform: "scale(1.5)",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
};

export default JobOrientedCourses;
