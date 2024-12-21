import React from "react";
import Header from "../../Header";
import Footer from "../footer";
import "./Blog.css"; // Add a CSS file for better styling

const dummyArticles = [
  { title: "The Future of Python Development", summary: "Explore how Python is shaping the future of software engineering and AI development.", author: "John Doe" },
  { title: "Mastering Java for Web Applications", summary: "Learn key tips and tricks for building robust web applications using Java.", author: "Jane Smith" },
  { title: "Testing Automation Simplified", summary: "An introduction to automation testing tools and how to get started.", author: "Alan Turing" },
  { title: "Responsive Web Design in 2024", summary: "Best practices for creating mobile-friendly and responsive websites.", author: "Grace Hopper" },
];

export const Blogs = () => {
  return (
    <div>
      {/* Header Section */}
      <div style={{position:'absolute',display:'contents'}}>
       <Header />
      </div>
    <div className="blogs-page">
    {/* Main Section */}
    <main className="blogs-main">
      {/* Hero Section */}
      <section className="blogs-hero">
        <h1 className="blogs-title">
          Welcome to Our Blogs!
        </h1>
        <p className="blogs-subtitle">
          Explore insights, tips, and trends in software development, written by our experts and students.
        </p>
      
        {/* <button className="blogs-cta">Read Latest Blogs</button> */}
      </section>
       
      {/* Video and About Us Section */}
      {/* <section className="blogs-content"> */}
        {/* <div className="blogs-video-section">
          <video
            autoPlay
            loop
            src="/animatedSVGS/Blogging.mp4"
            className="blogs-video"
          />
        </div> */}
        
        <div className="blogs-grid">
          {dummyArticles.map((article, index) => (
            <div key={index} className="blogs-card">
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <small>By: {article.author}</small>
            </div>
          ))}
        </div>
      {/* </section> */}

      {/* Blog Showcase */}
      <section className="blogs-showcase">
        <h2 className="blogs-showcase-heading">
          Our Student Spotlight <span className="upcoming-badge">(Upcoming)</span>
        </h2>
        <p>
          Discover achievements and innovative projects by our students. 
          In the future, you'll see interesting articles written by them 
          on topics of their choice, showcasing their creativity and knowledge.
        </p>
        <div className="blogs-about-us">
          <h2>About Our Platform</h2>
          <p>
            Our online learning platform, founded by IT industry professionals, 
            offers cutting-edge courses aligned with market standards. Gain expertise 
            through digital classrooms, live projects, and certifications. Enjoy flexible timings, 
            24/7 support, and comprehensive curricula.
          </p>
          <p>
            Learn from industry experts and secure your future with placements 
            powered by our unmatched commitment to student success.
          </p>
       </div>
      </section>
    </main>

  
  </div>
    {/* Footer Section */}
    <Footer />
    </div>
   
  );
};
