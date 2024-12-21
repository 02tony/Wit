import React from "react";
import "./testimonials.css";

const StudentBenefits = () => {
  const benefits = [
    {
      title: "24 X 7 Lab Facilities",
      description: "Learn at your convenience with full-day labs accessible to all our students.",
      icon: "🖥️",
    },
    {
      title: "Digital Classroom",
      description: "Access our digital learning platform anytime, anywhere.",
      icon: "🌐",
    },
    {
      title: "Learn from the Experts",
      description: "Gain knowledge and skills from industry experts with years of experience.",
      icon: "🎓",
    },
    {
      title: "LIVE Projects",
      description: "Work on live projects to gain hands-on experience and boost your confidence.",
      icon: "📂",
    },
    {
      title: "Certification",
      description: "Earn globally recognized certifications to boost your career opportunities.",
      icon: "📜",
    },
    {
      title: "Flexible Timings",
      description: "Learn at your own pace with flexible morning and evening batches.",
      icon: "⏰",
    },
    {
      title: "Placement Assistance",
      description: "Get guidance and support to land your dream job in IT.",
      icon: "💼",
    },
    {
      title: "Comprehensive Curriculum",
      description: "Our curriculum is designed to cover foundational to advanced topics in IT.",
      icon: "📘",
    },
  ];

  return (
    <div className="student-benefits">
      <div className="left-column">
        <h2>Why Choose Us?</h2>
        <div className="underline"></div>
        <p>
          At WIT, we bridge the gap between aspiration and achievement in the IT
          industry. Founded by seasoned IT professionals, our platform delivers
          more than just courses – we create pathways to successful careers in
          technology.
        </p>
        <p>
          Our comprehensive learning ecosystem is built on four key pillars:
          cutting-edge curriculum, interactive digital classrooms, hands-on
          experience, and continuous support. Every course is meticulously
          crafted to align with current market demands, ensuring our students
          master the skills that employers value most.
          <br />
          What sets WIT apart is our commitment to practical learning. Through
          live projects, students gain real-world experience, applying
          theoretical knowledge to solve actual industry challenges. Our
          digital classrooms provide a dynamic learning environment, enabling
          students to learn at their own pace while staying connected with
          industry experts.
          <br />
          Understanding that learning extends beyond regular hours, we provide
          round-the-clock support to address any queries or challenges our
          students face. Our certification programs add credibility to your
          profile, while our placement assistance ensures your skills find the
          right opportunity.
          <br />
          At WIT, we don't just educate – we empower. Join us to transform your
          career aspirations into reality with expert-led, flexible learning
          solutions that align perfectly with industry needs.
        </p>
      </div>
      {/* <div className="right-column">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="media">
              <div className="icon">{benefit.icon}</div>
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div> */}
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
