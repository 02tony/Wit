import {React} from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
// import { PythonCourse, WebDevelopmentCourse, SQLCourse,JavaCourse, AptitudeSkills, CommunicationSkills } from "../Pages/Courses";

const Footer = () => {

  // const renderStars = () => {
  //   const stars = [];
  //   for (let i = 0; i < 50; i++) {
  //     const randomTop = Math.random() * 100;
  //     const randomLeft = Math.random() * 100;
  //     const randomDelay = Math.random() * 5 + "s";
  //     const randomTailLength = Math.random() * 4 + 2;

  //     stars.push(
  //       <div
  //         key={i}
  //         className="star"
  //         style={{
  //           "--top-offset": `${randomTop}%`,
  //           "--left-offset": `${randomLeft}%`,
  //           "--fall-duration": "9s",
  //           "--fall-delay": randomDelay,
  //           "--star-tail-length": `${randomTailLength}em`,
  //         }}
  //       />
  //     );
  //   }
  //   return stars;
  // };
  // const [activeCourse, setActiveCourse] = useState(null);

  // const handleCourseClick = (course) => {
  //   setActiveCourse(course);
  // };

  // const handleCloseModal = () => {
  //   setActiveCourse(null);
  // };


  return (
    <footer className="footer">
      {/* <div className="stars">{renderStars()}</div> */}
      <div className="footer-content">
        <div className="logo-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 100"
            className="logo"
            role="img"
            aria-label="WIT Logo"
          >
            <text x="35%" y="50%" textAnchor="middle" dominantBaseline="middle" className="wit-textW">
              W
            </text>
            <text x="65%" y="50%" textAnchor="middle" dominantBaseline="middle" className="wit-textIT">
              IT
            </text>
          </svg>
        </div>
        <div className="organization-info">
          <p>
            {/* WIT is an online learning platform founded by IT industry professionals. We offer
            cutting-edge courses aligned with market standards, digital classrooms, live projects,
            certifications, and 24/7 support. Our mission is to ensure student success and secure
            placements.Empowering careers with expert-led, flexible, and industry-aligned learning */}
            WIT stands at the forefront of digital education, revolutionizing the way professionals acquire in-demand IT skills. Founded by industry veterans, our platform delivers more than just courses – we provide a comprehensive learning ecosystem. Through cutting-edge curriculum aligned with current market needs, interactive digital classrooms, and hands-on live projects, students gain practical expertise that employers value. Our commitment extends beyond education with 24/7 support and industry-recognized certifications. What sets us apart is our unwavering focus on student success, ensuring each learner transitions smoothly from education to employment. At WIT, we're not just teaching technology; we're empowering careers through expert-led, flexible learning solutions.
          </p>
        </div>
        <div className="footer-sections">
          {/* <div className="footer-section">
            <h3>ADDRESS</h3>
            <p>374 William S Canning Blvd, River</p>
            <p>MA 2721, USA</p>
            <p>Phone: (+880) 155-69569</p>
            <p>Email: support@wit.com</p>
          </div> */}
          <div className="footer-section">
            <h3>COURSES</h3>

<ul>
  <li>
    <NavLink
      to="/PythonCourse"
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      Python
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/JavaCourse"
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      Java
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/WebDevelopmentCourse"
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      Web Development
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/CommunicationSkills"
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      Communication Skills
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/AptitudeSkills"
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      Aptitude Skills
    </NavLink>
  </li>
</ul>

          </div>
          <div className="footer-section">
            <h3>Up Coming Events</h3>
            <div className="recent-post">
              <p>Up Coming Events </p>
              <span>updating...</span>
            </div>
            <div className="recent-post">
              <p>Announcements</p>
              <span>updating...</span>
            </div>
          </div>
        </div>
      </div>
      {/* {activeCourse} */}
    </footer>
  );
};

export default Footer;
