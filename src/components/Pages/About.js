import React from 'react';
import Footer from '../home/footer';
import Header from '../Header';
import './About.css'; // Importing the updated CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <Header />
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Empowering careers with expert-led, flexible, and industry-aligned learning</p>
      </div>

      {/* About Section */}
      <div className="about-content">
        <div className="about-intro">
          <h2>Who We Are</h2>
          <p>
            Our online learning platform, founded by IT industry professionals, is dedicated to providing 
            cutting-edge courses tailored to market standards. With digital classrooms, live projects, 
            certifications, and industry-focused training, we prepare you for success.
          </p>
          <p>
            Flexible schedules, 24/7 support, and expert mentors ensure you gain the skills needed to secure 
            your dream job. Join us to redefine your learning experience.
          </p>
        </div>

        {/* Success Story Section */}
        <div className="success-story">
          <h2>Our Success Story</h2>
          <div className="story-grid">
            <div className="story-card">
              <h3>The Challenge</h3>
              <p>
              Students struggle to get employment in the IT industry as a programmer. To land a career in IT,
               you must have real-world experience, strong presentational abilities, and practical training. 
               The IT Education Centre is preparing students to find employment in the IT industry by providing
              them with training and getting ready to make themselves stand out from the crowd.
               For people searching for IT employment, the WIT institute has created the job oriented program.
               We are glad to walk you through each stage of this career-focused training and its advantages for job placement.
              </p>
            </div>
            <div className="story-card">
              <h3>How We Addressed It</h3>
              <ul>
                <li>
                  <strong>Innovative Solutions:</strong> Flexible schedules and interactive teaching methods.
                </li>
                <li>
                  <strong>Dedicated Support:</strong> Personalized guidance from mentors like Karthik and Tharun.
                </li>
                <li>
                  <strong>Team Effort:</strong> Leadership by Setty Mohith and Naresh Padmasale created a 
                  motivational environment.
                </li>
              </ul>
            </div>
            <div className="story-card">
              <h3>The Outcome</h3>
              <p>
                The students who come to WIT bagged the a knowledge to open their careers in the IT industry with  relative skills & experience  from industry experts 
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul className="benefits-list">
            <li>
              <div className="benefit-icon">
                <img src="/icons/market-content.svg" alt="Market Content" />
              </div>
              <div className="benefit-text">
                Market-aligned courses with cutting-edge content
              </div>
            </li>
            <li>
              <div className="benefit-icon">
                <img src="/icons/digital-classroom.svg" alt="Digital Classroom" />
              </div>
              <div className="benefit-text">
                Interactive and engaging digital classrooms
              </div>
            </li>
            <li>
              <div className="benefit-icon">
                <img src="/icons/real-world-projects.svg" alt="Projects" />
              </div>
              <div className="benefit-text">
                Hands-on experience with real-world projects
              </div>
            </li>
            <li>
              <div className="benefit-icon">
                <img src="/icons/certifications.svg" alt="Certifications" />
              </div>
              <div className="benefit-text">
                Certifications to validate your skills
              </div>
            </li>
            <li>
              <div className="benefit-icon">
                <img src="/icons/mentor-support.svg" alt="Support" />
              </div>
              <div className="benefit-text">
                24/7 mentor support and flexible schedules
              </div>
            </li>
          </ul>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default About;
