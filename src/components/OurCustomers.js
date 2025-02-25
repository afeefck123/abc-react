import React from "react";
import styles from "../styles/OurCustomers.module.css";

const OurCustomers = () => {
  const customers = [
    
    {  logo: "/new1.png" },  
    {  logo: "/newcart.png" },
    {  logo: "/newdior.jpeg" },
    {  logo: "/newlotus.png" },
    { logo: "/newfendi.png" },
    { logo: "/newvalentino.jpeg" },
    {  logo: "/logolast2.png" },
    {logo: "/newgoogle.jpeg" },
  ];

  return (
    <section className={styles.customersSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Customers</h1>
        <p className={styles.subtitle}>
          Our customers are the heart of our company, and their unwavering support makes them the true stars of our show.
        </p>

        <div className={styles.grid}>
          {customers.map((customer, index) => (
            <div key={index} className={styles.customerItem}>
              <img src={customer.logo} alt={customer.name} className={styles.logo} />
              <span className={styles.customerName}>{customer.name}</span>
            </div>
          ))}
        </div>

        <p className={styles.moreCustomers}>+100 more</p>
      </div>
    </section>
  );
};

export default OurCustomers;
