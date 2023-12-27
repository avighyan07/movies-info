import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the home page
    navigate('/');
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have questions, suggestions, or feedback? Reach out to us!</p>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
