import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#6ca6cc",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
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
    flexDirection: "row", // Default layout
    "@media (max-width: 768px)": {
      flexDirection: "column", // Mobile layout
      flexWrap: "wrap",
    },
  },
  imageContainerForTop: {
    position: "relative",
    width: "450px",
    height: "350px",
    borderRadius: 10,
    backgroundColor:'white',
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    "@media (max-width: 768px)": {
      width: "90%",
      height: "250px",
    },
  },
  imageContainer: {
    position: "relative",
    width: "200px",
    height: "160px",
    "@media (max-width: 768px)": {
      width: "60%",
      height: "60%",
    },
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
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
    },
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "50px",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "10px",
    },
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
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&.hovered": {
      transform: "scale(1.1)", // Slight zoom effect on hover
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)", // Enhanced shadow effect
    },
    "@media (max-width: 768px)": {
      width: "60%",
      height: "60%",
    },
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
});

const JobOrientedCourses = () => {
  const classes = useStyles();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className={classes.container}>
      {/* Title Section */}
      <h1 className={classes.title}>Job Oriented Courses</h1>
      <hr className={classes.titleUnderline} />

      {/* Slider Section */}
      <div className={classes.slider}>
        <div className={classes.imageContainerForTop}>
          <img
            src="svgs/jobHunt.svg"
            alt="Development Job Guarantee"
            className={classes.sliderImage}
          />
           {/* <iframe 
          // src="https://lottie.host/embed/4449bc0f-4967-4092-8888-45007dc2e01e/TspOegoeQK.lottie" 
          src="https://lottie.host/embed/517533c1-6c26-440d-a9c8-31ed2c9907d3/S6ZFqcLAXL.lottie"
          style={{width: '300px'  ,height: '300px', }}>
        </iframe> */}



          <p className={classes.overlayText}>Find right career</p>
        </div>
        <div className={classes.imageContainerForTop}>
          <img
            src="svgs/interview.svg"
            alt="Networking Job Guarantee"
            className={classes.sliderImage}
          />
          <p className={classes.overlayText}>Networking Job Guarantee</p>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className={classes.cardsContainer}>
        {[
          { src: "svgs/Remote.svg", text: "Classroom Batch Training" },
          { src: "svgs/OnlineClass.svg", text: "Online Training" },
          { src: "svgs/CorporatesTraining.svg", text: "Job-Oriented Training" },
          { src: "svgs/training.svg", text: "Corporate Training" },
          { src: "/svgs/Certification-cuate.svg", text: "Certification Courses" },
        ].map((card, index) => (
          <div
            key={index}
            className={`${classes.card} ${hoveredCard === index ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onTouchStart={() => setHoveredCard(index)}
            onTouchEnd={() => setHoveredCard(null)}
          >
            <div className={classes.imageContainer}>
              <img src={card.src} alt={card.text} className={classes.cardImage} />
              <p className={classes.overlayText}>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOrientedCourses;
