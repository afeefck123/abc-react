import React from 'react';
import styles from '../styles/Portfolio.module.css';
import { useEffect } from 'react';
import Navbar from './Navbar';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      year: '2023',
      title: 'departx',
      image: '/images/departx.png',
      link: 'https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(39).png'
    },
    {
      id: 2,
      year: '2021',
      title: 'me and me ',
      image: '/images/me and me.png',
      link: 'https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(40).png'
    },
    {
      id:3,
      year:'2022',
      title:'Next Me',
      image:'/images/nextgo.png',
      link:'https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(34).png'
    },
    {
      id:4,
      year:'2022',
      title:'Suprabadham',
      image:'/images/suprabadham.png',
      link:'https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(35).png'
    },
    {
      id:5,
      year:'2022',
      title:'taxgo',
      image:'/images/taxgo.png',
      link:'https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(32).png'
    },
    {
      id:6,
      year:'2022',
      title:'We Collect,Deliver',
      image:'/images/we collect,deliver.png',
      link:'https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(31).png'
    }
    // Add more portfolio items as needed
  ];
  useEffect(() => {
          document.body.style.overflow = "auto"; // ✅ Allow scrolling
          return () => {
              document.body.style.overflow = "hidden"; // ✅ Lock scrolling when leaving
          };
      }, []);

  return (
    <>
    <Navbar/>
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Portfolio</h1>
          <p className={styles.subtitle}>
            Each website in our portfolio is a testament to our unwavering dedication to quality, innovation, and customer satisfaction.
          </p>
        </div>
        
        <div className={styles.grid}>
          {portfolioItems.map((item) => (
            <div key={item.id} className={styles.portfolioItem}>
              <a href={item.link} className={styles.portfolioLink}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.year}>{item.year}</span>
                    <h2 className={styles.projectTitle}>{item.title}</h2>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Portfolio;
