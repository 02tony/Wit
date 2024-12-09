import React from "react";

const GoogleFormEmbed = ({ showForm, onClose }) => {
  if (!showForm) return null; // Do not render the component if showForm is false.

  return (
    <div style={styles.overlay}>
      <div style={styles.formContainer}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe4UaRGNfrNd_Pa9JYh2gAFpBzuaEiI8s_5cZ6jTk9DnCLD3A/viewform"
          title="Google Form"
          style={styles.iframe}
        />
        <button onClick={onClose} style={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  formContainer: {
    position: "relative",
    width: "90%",
    height:'90%',
    maxWidth: "600px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "5px 10px",
    backgroundColor: "#FF4D4D",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default GoogleFormEmbed;
