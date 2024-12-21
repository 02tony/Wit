import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/home';
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import CourseList from "./components/Pages/CourseList";
import GoogleFormEmbed from "./components/Pages/GoogleForm/googleform";
import { Blogs } from "./components/home/Blog";
import { PythonCourse, WebDevelopmentCourse , JavaCourse, AptitudeSkills, CommunicationSkills, SQLCourse} from "./components/Pages/Courses";
import './App.css'; // Import the CSS file
import ScrollToTopButton from "./components/Pages/ScrollToTopButton";

function App() {
  const [theme, setTheme] = useState('light'); // Default theme
  


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



  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/GoogleFormEmbed" element={<GoogleFormEmbed />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/PythonCourse" element={<PythonCourse/>} />
          <Route path="/JavaCourse" element={<JavaCourse/>} />
          <Route path="/WebDevelopmentCourse" element={<WebDevelopmentCourse/>} />
          <Route path="/CommunicationSkills" element={<CommunicationSkills/>} />
          <Route path="/AptitudeSkills"  element={<AptitudeSkills />}/>
          <Route path="/SQLCourse" element={<SQLCourse />}/>
          {/* <Route path="/SQL" */}
        </Routes>
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
