import React from "react";
import styles from "../styles/OurPackages.module.css";

const OurPackages = () => {
  return (
    <section className={styles.packages}>
      <h2>Our Packages</h2>
      <div className={styles.packageList}>
        <div className={styles.package}>Premium</div>
        <div className={styles.package}>Elite</div>
        <div className={styles.package}>Advanced</div>
      </div>
    </section>
  );
};

export default OurPackages;
