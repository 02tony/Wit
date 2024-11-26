import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/home/index"; // Adjust the path as per your structure
// import { Home } from "@mui/icons-material";
// import Home from './components/home/index'
// import { Home } from './components/home/Home';
import { Home } from './components/home';


import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import CourseList from "./components/Pages/CourseList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
