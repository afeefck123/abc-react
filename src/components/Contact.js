import React, { useState,useEffect } from 'react';
import styles from '../styles/Contact.module.css';
import { ArrowRight } from 'lucide-react';
import Navbar from "./Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  useEffect(() => {
          document.body.style.overflow = "auto"; // ✅ Allow scrolling
          return () => {
              document.body.style.overflow = "hidden"; // ✅ Lock scrolling when leaving
          };
      }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.contactContainer}>
      <h6 className={styles.title}>Get in touch with us</h6>
      
      <div className={styles.contentWrapper}>
        {/* Contact Form */}
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="firstName"
                placeholder="enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="lastName"
                placeholder="enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="enter your email address"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="enter your feedback or question here"
                value={formData.message}
                onChange={handleChange}
                className={`${styles.input} ${styles.textarea}`}
                rows="4"
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <span>send</span>
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className={styles.infoSection}>
          <div className={styles.infoBlock}>
            <h2 className={styles.infoTitle}>Location</h2>
            <a href="https://maps.google.com/?q=Toronto,Ontario" 
               target="_blank" 
               rel="noopener noreferrer" 
               className={styles.infoLink}>
              Toronto, Ontario
            </a>
          </div>

          <div className={styles.infoBlock}>
            <h2 className={styles.infoTitle}>Tell</h2>
            <a href="tel:416-939-4436" 
               className={styles.infoLink}>
              416-939-4436
            </a>
          </div>

          <div className={styles.infoBlock}>
            <h2 className={styles.infoTitle}>Email</h2>
            <a href="mailto:info@milanco.ca" 
               className={styles.infoLink}>
              info@milanco.ca
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;