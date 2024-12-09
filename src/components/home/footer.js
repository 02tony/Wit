import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      const randomTop = Math.random() * 100; // Random start vertical position (%)
      const randomLeft = Math.random() * 100; // Random start horizontal position (%)
      const randomDelay = Math.random() * 5 + "s"; // Random animation delay
      const randomTailLength = Math.random() * 4 + 2; // Random trail length
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            "--top-offset": `${randomTop}%`,
            "--left-offset": `${randomLeft}%`,
            "--fall-duration": "9s",
            "--fall-delay": randomDelay,
            "--star-tail-length": `${randomTailLength}em`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <footer className="footer">
      <div className="stars">{renderStars()}</div>
      <div className="footer-container">
        {/* Footer Content */}
        <div className="footer-section">
          {/* Animated Logo */}
          <div style={{marginRight:'0%'}}>
            <div class="logo-container">
              <svg
                xmlns="http://www.w3.org/TR/SVG"
                viewBox="0 0 200 100"
                class="logo"
                role="img"
                aria-label="WIT Logo"
              >
              {/* <!-- "W" Letter --> */}
              <text x="35%" y="50%" text-anchor="middle" dominant-baseline="middle" class="wit-textW">
                W
              </text>
              {/* <!-- "IT" Letters -->  */}
              <text x="65%" y="50%" text-anchor="middle" dominant-baseline="middle" class="wit-textIT">
                IT
              </text>
              </svg>
              
            </div>
            <p style={{width:'50%',marginRight:'50%'}}>
           Our online learning platform, founded by IT industry professionals, offers cutting-edge courses aligned with market standards. Gain expertise through digital classrooms, live projects, and certifications. Enjoy flexible timings, 24/7 support, and comprehensive curricula. Learn from experts and secure placements with our industry-focused training and unmatched commitment to student success.
          </p>
          </div>
        </div>
      </div>
      <div className="footer-section">
          <h3>ADDRESS</h3>
          <p>374 William S Canning Blvd, River</p>
          <p>MA 2721, USA</p>
          <p>Phone: (+880) 155-69569</p>
          <p>Email: support@rstheme.com</p>
        </div>
        <div className="footer-section">
          <h3>COURSES</h3>
          <ul>
            <div >
              <Link to={"/Courses" } color="red">
               Courses
              </Link>
            </div>
            {/* <li>Courses</li> */}
            <li>Course Two</li>
            <li>Single Course</li>
            <li>Profile</li>
            <li>Login/Register</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>RECENT POSTS</h3>
          <div className="recent-post">
            <img
              src="https://via.placeholder.com/50"
              alt="Post 1"
              loading="lazy"
            />
            <div>
              <p>High School Program Starting Soon 2021</p>
              <span>October 15, 2020</span>
            </div>
          </div>
          <div className="recent-post">
            <img
              src="https://via.placeholder.com/50"
              alt="Post 2"
              loading="lazy"
            />
            <div>
              <p>Shutdown of Schools Extended to Aug 31</p>
              <span>April 25, 2020</span>
            </div>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
