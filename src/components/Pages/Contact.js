import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Footer from "../home/footer";
import Header from "../Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Course Inquiry", // Default subject
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    const templateParams = {
      from_name: formData.name || "Unknown User",
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_35au3lg", // Replace with your EmailJS service ID
        "template_pn431vp", // Replace with your EmailJS template ID
        templateParams,
        "R-cgmHVobxfdG09vg" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "Course Inquiry",
            message: "",
          });
        },
        (error) => {
          alert("Error sending email: " + error.text);
        }
      );
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
        {/* Contact Details Section */}
        <div className="contact-details">
          <div className="contact-item">
            <div className="icon">📍</div>
            <h3>Address</h3>
            <p>228-5 Main Street, Georgia, USA</p>
          </div>
          <div className="contact-item">
            <div className="icon">✉️</div>
            <h3>Email Address</h3>
            <p>contact@educavo.com</p>
          </div>
          <div className="contact-item">
            <div className="icon">📞</div>
            <h3>Phone Number</h3>
            <p>(+01)999-999-4444</p>
          </div>
        </div>

        {/* Map and Contact Form Section */}
        <div className="map-and-form">
          <video className="responsive-video" autoPlay loop muted>
            <source src="/animatedSVGS/Contact us.mp4" type="video/mp4" />
            <source src="/animatedSVGS/Contact us.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          {/* Contact Form */}
          <div className="contact-form">
            <h3>Get in Touch</h3>
            <p>
              Have some suggestions or just want to say hi? Our support team is
              ready to help you 24/7.
            </p>
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="Course Inquiry">Course Inquiry</option>
                  <option value="Placement Inquiry">Placement Inquiry</option>
                  <option value="Partnership Request">Partnership Request</option>
                  <option value="General Query">General Query</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
