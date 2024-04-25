import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../Styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    query: '',
    agreeToPolicy: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.query.trim() === '') {
      alert('Please fill in all required fields');
      return;
    }
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    setFormSubmitted(true);
    console.log(formData);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <motion.div
      className="contact-us"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contact Us</h2>
      {formSubmitted ? (
        <div className="success-message">Thank you for contacting us! We will get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Query Details:</label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              name="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={handleChange}
              required
              className="form-check-input"
            />
            <label className="form-check-label">Agree to the site's policy</label>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary"
          >
            Submit
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactUs;
