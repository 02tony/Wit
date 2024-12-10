import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/home';
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import CourseList from "./components/Pages/CourseList";
import GoogleFormEmbed from "./components/Pages/GoogleForm/googleform";
import { Blogs } from "./components/home/Blog";
import './App.css'; // Import the CSS file

function App() {
  const [theme, setTheme] = useState('light'); // Default theme
  const [scrollProgress, setScrollProgress] = useState(0); // Progress bar state


  // Load the saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme; // Apply the theme to the body
  }, []);

  // Update the body class when theme changes
  useEffect(() => {
    document.body.className = theme; // Apply the current theme to the body
  }, [theme]);

  // Function to calculate scroll progress
  const updateProgress = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <Router>
      <div>
        {/* Header Component */}
        {/* <Header /> */}

        {/* Progress Bar */}
        {/* <div
          style={{
            position: 'fixed',
            top: '70px', // Position below the header (adjust based on header height)
            left: 0,
            height: '8px',
            backgroundColor: '#e66e00', // Orange color
            width: `${scrollProgress}%`,
            zIndex: 1002, // Ensure it's above other elements
            transition: 'width 0.2s ease-out',
          }}
        ></div> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/GoogleFormEmbed" element={<GoogleFormEmbed />} />
          <Route path="/Blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
