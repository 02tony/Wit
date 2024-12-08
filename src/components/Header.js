import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import GoogleFormEmbed from "./Pages/GoogleForm/googleform";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 5%",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
    "& img": {
      width: "auto",
      height: "50px",
      maxWidth: "100%",
    },
  },
  sticky: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    transform: "translateY(0)",
  },
  nav: {
    display: "flex",
    gap: "25px",
    marginLeft:'25%',
    "& a": {
      color: "#333",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      position: "relative",
      transition: "color 0.3s ease",
      "&:hover": {
        color: "#ff7f00",
      },
      "&.active": {
        color: "#ff7f00",
        fontWeight: "bold",
        borderBottom: "2px solid #ff7f00", // Highlight active link
      },
    },
  },
  applyNow: {
    backgroundColor: "#ff7f00",
    color: "#fff",
    width:"10%",
    padding: "8px", // Reduced padding for a normal size button
    fontSize: "14px", // Adjusted font size for normal appearance
    borderRadius: "4px", // Slightly rounded corners
    textDecoration: "none",
    fontWeight: "500",
    alignSelf: "flex-end", // Ensures alignment to the top-right corner
    marginLeft: "auto", // Pushes the button to the far right
    "&:hover": {
      backgroundColor: "#e66e00",
    },
  },
});

function Header() {
  const classes = useStyles();
  const [isSticky, setIsSticky] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => setShowForm(false);

  return (
    <>
      <header
        className={`${classes.header} ${
          isSticky ? classes.sticky : ""
        }`}
      >
        <div style={{ marginLeft:'5%',}}>
          <img src="/Logo.png" alt="WIT Logo" />
        </div>
        <nav className={classes.nav}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            to="/courses"
            className={location.pathname === "/courses" ? "active" : ""}
          >
            Courses
          </Link>
          <Link
            to="/Blogs"
            className={location.pathname === "/Blogs" ? "active" : ""}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </nav>
        <button className={classes.applyNow} onClick={handleFormOpen}>
          Register
        </button>
      </header>

      {/* Google Form Embed */}
      <GoogleFormEmbed showForm={showForm} onClose={handleFormClose} />
    </>
  );
}

export default Header;
