import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import GoogleFormEmbed from "./Pages/GoogleForm/googleform";
import { SQLCourse } from "./Pages/Courses";
import { 
  PythonCourse,
  JavaCourse,
  WebDevelopmentCourse,
  // SQLCourse,
  AptitudeSkills,
  CommunicationSkills 
} from "./Pages/Courses";

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
    width: '100%',
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
  dropdownCourses: {
    position: "absolute",
    top: "70px",
    right: "43%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    flexDirection: "column",
    padding: "9px 0",
    gap: "10px",
    display: "flex",
    "& a": {
      color: "#333",
      textDecoration: "none",
      padding: "10px 10px",
      fontSize: "14px",
      "&:hover": {
        color: "#ff7f00",
        backgroundColor: "#f9f9f9",
      },
    },
  },
  dropdownCourses1: {
    position: "absolute",
    top: "70px",
    right: "48%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    flexDirection: "column",
    padding: "10px 0",
    gap: "10px",
    display: "flex",
    zIndex:1001,
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
  showDropdown: {
    display: "flex",
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
  hamburgerMenu: {
    position: "absolute",
    top: "60px",
    left: 0,
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1001,
    display: "none",
    flexDirection: "column",
    padding: "10px 0",
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
  showHamburgerMenu: {
    display: "flex",
  },
  applyNow: {
    backgroundColor: "#ff7f00",
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
  active: {
    color: '#ff7f00',
    fontWeight: 'bold',
  },
  button1: {
    width: '50%',
    padding: '10px 7px',
    fontSize: '16px',
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    borderRadius: '28px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
});

function Header() {
  const [isDropdownOpenCourses, setIsDropdownOpenCourses] = useState(false);
  const [isHamburgerOpenMain,setIsDropdownOpenCoursesMain ] =useState(false)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const classes = useStyles();

  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => setShowForm(false);
  
  const toggleDropdownCourses = () => (setIsDropdownOpenCourses(prev => !prev) );
  const toggleDropdownCoursesMain=() =>setIsDropdownOpenCoursesMain(prev => !prev)
  const toggleHamburger = () => setIsHamburgerOpen(prev => !prev) ;

  const handleLinkClick = () => {
    setIsDropdownOpenCoursesMain(false)
    setIsDropdownOpenCourses(false);
  };
 const openMainCourses =() =>{
  toggleDropdownCourses()
  toggleDropdownCoursesMain()
  setIsHamburgerOpen(false);
  }

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const courses = [
    { title: "Python", path: "/PythonCourse", component: PythonCourse },
    { title: "Java", path: "/JavaCourse", component: JavaCourse },
    { title: "Web Development", path: "/WebDevelopmentCourse", component: WebDevelopmentCourse },
    { title: "SQL", path: "/SQLCourse", component: SQLCourse },
    { title: "Communication Skills", path: "/CommunicationSkills", component: CommunicationSkills },
    { title: "Aptitude Skills", path: "/AptitudeSkills", component: AptitudeSkills },
  ];

  return (
    <>
      <header className={classes.header}>
        <img src="/Logo.png" alt="WIT Logo" className={classes.logo} />
        <nav className={classes.nav}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
          <div onClick={toggleDropdownCourses} style={{ cursor: "pointer" }}>
            <Link
              className={`${classes.nav} ${
                [
                  "/PythonCourse",
                  "/JavaCourse",
                  "/WebDevelopmentCourse",
                  "/SQLCourse",
                  "/CommunicationSkills",
                  "/AptitudeSkills",
                ].some((path) => location.pathname.includes(path)) ? "active" : ""
              }`}
            >
              Courses
            </Link>
            {isDropdownOpenCourses && (
              <div className={`${classes.dropdownCourses} ${classes.showDropdown}`}>
                {courses.map((course) => (
                  <Link
                    key={course.title}
                    to={course.path}
                    onClick={handleLinkClick}
                    className={location.pathname === course.path ? "active" : ""}
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/blogs" className={location.pathname === "/blogs" ? "active" : ""}>
            Blogs
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </nav>
        <div className={classes.hamburger} onClick={toggleHamburger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.applyNow}  onClick={handleFormOpen}>
          Register
        </div>
        <div>
          <div
            style={{
              position: "absolute",
              top: '70px',
              left: 0,
              height: "8px",
              backgroundColor: "#e66e00",
              width: `${scrollProgress}%`,
              zIndex: 1002,
              transition: "width 0.2s ease-out",
            }}
          ></div>
        </div>
      </header>

      {isHamburgerOpen && (
        <div className={`${classes.hamburgerMenu} ${classes.showHamburgerMenu}`}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
          <div>
            <span onClick={openMainCourses} style={{ cursor: "pointer", padding: "10px 20px", display: "block",color:"#333", fontSize: "14px", }}>
              Courses
            </span>
          </div>
          <Link to="/blogs" onClick={handleLinkClick}>Blogs</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          
        </div>
      )}
       {isHamburgerOpenMain && (
              <div className={classes.dropdownCourses1}>
                {courses.map((course) => (
                  <Link
                    key={course.title}
                    to={course.path}
                    onClick={handleLinkClick}
                  >
                  {course.title}
                  </Link>
                ))}
              </div>
            )}

      <GoogleFormEmbed showForm={showForm} onClose={handleFormClose} />
    </>
  );
}

export default Header;
