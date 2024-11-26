import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  topBar: {
    backgroundColor: "#f4f4f4",
    padding: "10px 10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "100px",
    fontSize: "14px",
    color: "#333",
    "& span": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    "& a": {
      color: "#ff7f00",
      textDecoration: "none",
      fontWeight: "500",
      marginLeft: "15px",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 20px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
    transition: "transform 0.3s ease-in-out", // Smooth transition for sticky behavior
    "& img": {
      marginLeft: "100px",
      width: "auto",
      height: "30px",
      maxWidth: "100%",
    },
  },
  sticky: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    transform: "translateY(0)", // Visible when scrolled
  },
  hidden: {
    transform: "translateY(-100%)", // Hidden when at the top
  },
  slowHover: {
    "& a:hover": {
      transition: "color 0.6s ease", // Slower hover effect
      color: "#ff7f00",
    },
    "& i:hover": {
      transition: "color 0.6s ease", // Slower hover effect for icons
      color: "#ff7f00",
    },
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#333",
  },
  nav: {
    display: "flex",
    gap: "20px",
    "& a": {
      color: "#333",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      position: "relative",
      "&:hover": {
        color: "#ff7f00",
      },
      "&.active": {
        color: "#ff7f00",
      },
    },
  },
  applyNow: {
    backgroundColor: "#ff7f00",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#e66e00",
    },
  },
  icons: {
    display: "flex",
    gap: "15px",
    "& i": {
      fontSize: "20px",
      color: "#333",
      cursor: "pointer",
      transition: "color 0.3s",
      "&:hover": {
        color: "#ff7f00",
      },
    },
  },
});

function Header() {
  const classes = useStyles();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top bar with contact info */}
      <div className={classes.topBar}>
        <div className={classes.logo}>WIT</div>
        <span>
          <i className="fas fa-envelope"></i>
          support@website.com
        </span>
        <span>
          <i className="fas fa-map-marker-alt"></i>
          374 William S Canning Blvd, MA 2721, USA
        </span>
        <Link to="/login">Login/Register</Link>
      </div>

      {/* Main header */}
      <header
        className={`${classes.header} ${
          isSticky ? `${classes.sticky} ${classes.slowHover}` : ''
        }`}
      >
        <div className={classes.logo}>
          <img src="/Logo.png" alt="WIT Logo" />
        </div>
        <nav className={classes.nav}>
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className={classes.icons}>
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-user"></i>
          <i className="fas fa-bars"></i>
        </div>
        <Link to="/apply" className={classes.applyNow}>
          APPLY NOW
        </Link>
      </header>
    </>
  );
}

export default Header;

