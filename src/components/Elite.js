import React from "react";
import styles from "../styles/Elite.module.css";

const Elite = () => {
  return (
    <section className={styles.eliteSection}>
      {/* Left Side: 3D Image and Price */}
      <div className={styles.leftPanel}>
        <img src="/elite.jpg" alt="Elite Package" className={styles.eliteImage} />
        <p className={styles.basePrice}>Base Price</p>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
          ask in whatsapp <span>↗</span>
        </a>
        <button className={styles.orderButton}>order →</button>
        <button className={styles.portfolioButton}>portfolio →</button>
      </div>

      {/* Right Side: Text Content */}
      <div className={styles.rightPanel}>
        <h1 className={styles.title}>Elite</h1>
        <p className={styles.description}>
          Are you looking for a way to differentiate your business from the competition? 
          Look no further than our Elite package - the ultimate solution for enterprises 
          seeking to stand out and make a lasting impression.
        </p>
        <p className={styles.description}>
          With our Elite package, your website will spring to life with an animated intro, 
          customized imagery, and a dynamic design that showcases your brand in a unique 
          and engaging way. Say goodbye to generic websites that fail to capture your 
          company’s essence.
        </p>
        <p className={styles.description}>
          Our admin panel provides customization options that make updates and maintenance 
          a breeze, so you can focus on what really matters - growing your business.
        </p>
        <p className={styles.description}>
          Join the elite and discover the power of a website that truly reflects the heart 
          and soul of your business. Contact us today to learn more about our Elite package 
          and how it can help you make a lasting impact in your industry.
        </p>
      </div>
    </section>
  );
};

export default Elite;
