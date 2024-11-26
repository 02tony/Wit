import React from "react";
import "./testimonials.css";

const StudentBenefits = () => {
  const benefits = [
    {
      title: "24 X 7 Lab Facilities",
      description: "Learn at your convenience as we provide full-day labs available to students.",
      icon: "🔗", // Replace with your actual icon/image
    },
    {
      title: "Digital Classroom",
      description: "You can now connect digitally to our learning platform as and when you want to.",
      icon: "💻", // Replace with your actual icon/image
    },
    {
      title: "Learn from the Experts",
      description:
        "Trainer’s knowledge and experience enable our students to learn precise skills with relative ease.",
      icon: "🌟", // Replace with your actual icon/image
    },
    {
      title: "LIVE Project",
      description:
        "Our Live Project based training enables you to code and learn on the go. We implement a unique live training methodology.",
      icon: "📝", // Replace with your actual icon/image
    },
  ];

  return (
    <div className="student-benefits">
      <div className="left-column">
        <h2>Students Benefits</h2>
        <div className="underline"></div>
        <p>
          We cordially encourage you to enroll in the top training programs in Pune for a wide range of IT and personal
          development abilities.
        </p>
        <p>
          Students struggle to get employment in the IT industry as a programmer. To land a career in IT, you must have
          real-world experience, strong presentation abilities, and practical training.
        </p>
      </div>
      <div className="right-column">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentBenefits;
