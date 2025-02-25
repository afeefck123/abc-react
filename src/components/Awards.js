import React from "react";
import styles from "../styles/Awards.module.css";
import { motion } from "framer-motion";


const Awards = () => {
  return (
    <section className={styles.awardsSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Why Milan?</h1>
        <p className={styles.description}>
          Elevate your business to new heights with Milan's cutting-edge online presence solution. Our futuristically-tuned customized approach, hyper-speed loading, wallet-friendly pricing, and personalized support will transport your website to the forefront of the digital realm. Join us in forging a dazzling, technologically advanced web that pushes the boundaries of what's possible.
        </p>

        <div className={styles.awardsGrid}>
          <img src="/awards1.png" alt="W Awards" className={styles.awardImage} />
          <img src="/awards2.png" alt="CSS Design Awards" className={styles.awardImage} />
          <img src="/awards3.png" alt="FWA Awards" className={styles.awardImage} />
          <img src="/awards4.jpg" alt="Webby Awards" className={styles.awardImage} />
        </div>
        
      </div>
      
    </section>
  );
};

export default Awards;
