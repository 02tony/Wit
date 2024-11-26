import React from 'react';
import Header from '../Header';
import Footer from '../home/footer';

const Contact = () => {
  return (
    <div>
      <div>
      <Header />
      </div>
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" required />
        <label>Email:</label>
        <input type="email" required />
        <button type="submit">Submit</button>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

