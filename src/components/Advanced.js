import React from "react";
import styles from "../styles/Advanced.module.css";

const Advanced = () => {
  return (
    <section className={styles.eliteSection}>
      {/* Left Side: 3D Image and Price */}
      <div className={styles.leftPanel}>
        <img src="/advanced.jpg" alt="Elite Package" className={styles.eliteImage} />
        <p className={styles.basePrice}>Base Price</p>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
          ask in whatsapp <span>↗</span>
        </a>
        <button className={styles.orderButton}>order →</button>
        <button className={styles.portfolioButton}>portfolio →</button>
      </div>

      {/* Right Side: Text Content */}
      <div className={styles.rightPanel}>
        <h1 className={styles.title}>Advanced</h1>
        <p className={styles.description}>
        Is your business looking to reach new heights and dominate the online world? Our Advanced Package is the answer. With this comprehensive solution, you'll maximize your potential with a robust website featuring 10 custom pages and a bespoke CRM designed specifically to meet your business needs.
        </p>
        <p className={styles.description}>
          With our Elite package, your website will spring to life with an animated intro, 
          customized imagery, and a dynamic design that showcases your brand in a unique 
          and engaging way. Say goodbye to generic websites that fail to capture your 
          company’s essence.
        </p>
        <p className={styles.description}>
        Our expert team will collaborate with you to optimize every aspect of your website for success. And with our fully customizable admin panel, you can easily manage your website and track its performance in real-time.
        </p>
        <p className={styles.description}>
        Don't settle for a cookie-cutter website that fails to showcase your business's unique qualities. Choose our Advanced Package and unlock the full potential of your online presence. Contact us today to learn how we can help you achieve your business goals.
        </p>
      </div>
    </section>
  );
};

export default Advanced;
