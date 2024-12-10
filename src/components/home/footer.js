import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

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
            WIT is an online learning platform founded by IT industry professionals. We offer
            cutting-edge courses aligned with market standards, digital classrooms, live projects,
            certifications, and 24/7 support. Our mission is to ensure student success and secure
            placements.Empowering careers with expert-led, flexible, and industry-aligned learning
          </p>
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h3>ADDRESS</h3>
            <p>374 William S Canning Blvd, River</p>
            <p>MA 2721, USA</p>
            <p>Phone: (+880) 155-69569</p>
            <p>Email: support@wit.com</p>
          </div>
          <div className="footer-section">
            <h3>COURSES</h3>
            <ul>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>Course Two</li>
              <li>Single Course</li>
              <li>Profile</li>
              <li>Login/Register</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>RECENT POSTS</h3>
            <div className="recent-post">
              <p>High School Program Starting Soon 2021</p>
              <span>October 15, 2020</span>
            </div>
            <div className="recent-post">
              <p>Shutdown of Schools Extended to Aug 31</p>
              <span>April 25, 2020</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
