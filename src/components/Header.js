import React, { useState } from "react";
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
  },
  logo: {
    height: "50px",
    "@media (max-width: 768px)": {
      height: "40px",
    },
  },
  nav: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
    "& a": {
      color: "#333",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      transition: "color 0.3s ease",
      "&:hover": {
        color: "#ff7f00",
      },
      "&.active": {
        color: "#ff7f00",
        fontWeight: "bold",
      },
    },
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  dropdown: {
    position: "absolute",
    display: "flex",
    top: "60px",
    right: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    padding: "10px 0",
    gap: "10px",
    "& a": {
      color: "#333",
      textDecoration: "none",
      padding: "10px 20px",
      fontSize: "14px",
      "&:hover": {
        color: "#ff7f00",
        backgroundColor: "#f9f9f9",
      },
    },
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
    "& div": {
      width: "25px",
      height: "3px",
      backgroundColor: "#333",
      borderRadius: "2px",
    },
    "@media (max-width: 768px)": {
      display: "flex",
    },
  },
  applyNow: {
    backgroundColor: "#ff7f00",
    width:'auto',
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    padding: "8px 12px",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#e66e00",
    },
    "@media (max-width: 768px)": {
      fontSize: "12px",
    },
  },
});

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const classes = useStyles();

  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => setShowForm(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const handleLinkClick = () => setIsDropdownOpen(false);

  return (
    <>
      <header className={classes.header}>
        <img src="/Logo.png" alt="WIT Logo" className={classes.logo} />
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
            to="/blogs"
            className={location.pathname === "/blogs" ? "active" : ""}
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
        <div className={classes.hamburger} onClick={toggleDropdown}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <button className={classes.applyNow} onClick={handleFormOpen}>
          Register
        </button>
      </header>

      {isDropdownOpen && (
        <div className={classes.dropdown}>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/courses" onClick={handleLinkClick}>
            Courses
          </Link>
          <Link to="/blogs" onClick={handleLinkClick}>
            Blogs
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      )}

      <GoogleFormEmbed showForm={showForm} onClose={handleFormClose} />
    </>
  );
}

export default Header;
