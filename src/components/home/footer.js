import React, { useState, useEffect } from "react";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Toggle visibility of the button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer content */}
        <div className="footer-section">
          <h2 className="footer-logo">WIT</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
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
            <li>Courses</li>
            <li>Course Two</li>
            <li>Single Course</li>
            <li>Profile</li>
            <li>Login/Register</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>RECENT POSTS</h3>
          <div className="recent-post">
            <img src="https://via.placeholder.com/50" alt="Post 1" />
            <div>
              <p>High School Program Starting Soon 2021</p>
              <span>October 15, 2020</span>
            </div>
          </div>
          <div className="recent-post">
            <img src="https://via.placeholder.com/50" alt="Post 2" />
            <div>
              <p>Shutdown of Schools Extended to Aug 31</p>
              <span>April 25, 2020</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
