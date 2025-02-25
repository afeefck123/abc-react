import React, { useEffect } from 'react';
import styles from '../styles/Footer.module.css';
import { FaBehance, FaDribbble, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  useEffect(() => {
          document.body.style.overflow = "auto"; // ✅ Allow scrolling
          return () => {
              document.body.style.overflow = "hidden"; // ✅ Lock scrolling when leaving
          };
      }, []);
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <img src="/logo.png" alt="Milanco Logo" className={styles.logo} />
          <h2 className={styles.thanks}>Thanks for Choosing us</h2>
        </div>

        {/* Navigation Links */}
        <div className={styles.linksContainer}>
          {/* Quick Links */}
          <div className={styles.linkColumn}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog & news</a>
          </div>

          {/* Services */}
          <div className={styles.linkColumn}>
            <a href="/elite">Elite</a>
            <a href="/premium">Premium</a>
            <a href="/advanced">Advanced</a>
            <a href="/portfolio">Portfolio</a>
          </div>

          {/* Legal */}
          <div className={styles.linkColumn}>
            <a href="/sitemap">Sitemap</a>
            <a href="/privacy">Privacy & Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <p><strong>Location:</strong> Toronto, Ontario</p>
            <p><strong>Tell:</strong> 416-939-4436</p>
            <p><strong>Email:</strong> info@milanco.ca</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © Copyright 2025 Milanco Webionics Inc., All rights Reserved.
          </p>
          
          {/* Social Icons */}
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Behance"><FaBehance /></a>
            <a href="#" aria-label="Dribbble"><FaDribbble /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;