import React from "react";
import "./testimonials.css";

const StudentBenefits = () => {
  const benefits = [
    {
      title: "24 X 7 Lab Facilities",
      description: "Learn at your convenience with full-day labs accessible to all our students.",
      image: "/path/to/lab-facilities-icon.png",
    },
    {
      title: "Digital Classroom",
      description: "Access our digital learning platform anytime, anywhere.",
      image: "/path/to/digital-classroom-icon.png",
    },
    {
      title: "Learn from the Experts",
      description: "Gain knowledge and skills from industry experts with years of experience.",
      video: "/path/to/experts-video.mp4",
    },
    {
      title: "LIVE Projects",
      description: "Work on live projects to gain hands-on experience and boost your confidence.",
      image: "/path/to/live-projects-icon.png",
    },
    {
      title: "Certification",
      description: "Earn globally recognized certifications to boost your career opportunities.",
      video: "/animatedSVGS/Certification.mp4",
    },
    {
      title: "Flexible Timings",
      description: "Learn at your own pace with flexible morning and evening batches.",
      image: "/path/to/flexible-timings-icon.png",
    },
    {
      title: "Placement Assistance",
      description: "Get guidance and support to land your dream job in IT.",
      image: "/path/to/placement-icon.png",
    },
    {
      title: "Comprehensive Curriculum",
      description: "Our curriculum is designed to cover foundational to advanced topics in IT.",
      image: "/path/to/curriculum-icon.png",
    },
  ];

  return (
    <div className="student-benefits">
      <div className="left-column">
        <h2>Why Choose Us?</h2>
        <div className="underline"></div>
        <p>
          At WIT, we provide top-notch IT training to help students achieve their career aspirations. Our online platform ensures that you have access to the best resources and guidance, wherever you are.
        </p>
        <p>
          Our programs are tailored to bridge the gap between academic learning and industry expectations, ensuring our students are job-ready.
        </p>
      </div>
      <div className="right-column">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="media">
              {benefit.image && <img src={benefit.image} alt={benefit.title} />}
              {benefit.video && (
                <video src={benefit.video} autoPlay loop muted />
              )}
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentBenefits;
