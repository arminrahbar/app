import React, { useState } from 'react';
import './Home.css'; // Use the existing CSS
import Layout from './Layout'; // Import the common layout
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for showing success or error messages
  const [statusMessage, setStatusMessage] = useState('');

  // Navigate hook to redirect to other pages
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill out all fields.');
      return;
    }

    // Mock form submission (Replace this with real API call if necessary)
    setTimeout(() => {
      setStatusMessage('Your message has been sent! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    }, 1000);
  };

  return (
    <Layout>
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Textarea */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-input"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Status Message */}
          {statusMessage && <p className="status-message">{statusMessage}</p>}

          {/* Buttons Container with Flexbox */}
          <div className="button-group">
            <button type="submit" className="btn">
              Send Message
            </button>

            <button
              type="button"
              className="btn"
              onClick={() => navigate('/')} // Redirect to homepage
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default ContactUs;
