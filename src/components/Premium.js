import React from "react";
import styles from "../styles/Premium.module.css";

const Premium = () => {
  return (
    <section className={styles.eliteSection}>
      {/* Left Side: 3D Image and Price */}
      <div className={styles.leftPanel}>
        <img src="/premium.jpg" alt="Elite Package" className={styles.eliteImage} />
        <p className={styles.basePrice}>Base Price</p>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
          ask in whatsapp <span>↗</span>
        </a>
        <button className={styles.orderButton}>order →</button>
        <button className={styles.portfolioButton}>portfolio →</button>
      </div>

      {/* Right Side: Text Content */}
      <div className={styles.rightPanel}>
        <h1 className={styles.title}>Premium</h1>
        <p className={styles.description}>
            Elevate your online presence with our Premium Package - the affordable solution for individuals and businesses seeking to showcase their brand with a professional website. With six meticulously crafted pages, high-quality images that are fully copyright compliant, and a mobile-friendly design, your website will exceed your client's expectations.
        </p>
        <p className={styles.description}>
          With our Elite package, your website will spring to life with an animated intro, 
          customized imagery, and a dynamic design that showcases your brand in a unique 
          and engaging way. Say goodbye to generic websites that fail to capture your 
          company’s essence.
        </p>
        <p>nice</p>
        <p className={styles.description}>
            Our fundamental user panel ensures that updates and maintenance are effortless, allowing you to focus on growing your business. With our Premium Package, you can leave behind the stress of website management and instead devote your energy to engaging your clients and creating valuable connections.
        </p>
        <p className={styles.description}>
           Don't settle for a run-of-the-mill website that fails to capture the essence of your brand. Choose our Premium Package and discover the power of a website that leaves a lasting impression. Contact us today to learn how we can help you unlock your online potential.
        </p>
      </div>
    </section>
  );
};

export default Premium;
