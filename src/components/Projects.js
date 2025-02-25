import React from "react";
import styles from "../styles/Projects.module.css";

const Projects = ({ gridRef, setIsInsideGrid }) => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Projects</h1>
          <p className={styles.subtitle}>
            Explore some of our most successful projects.
          </p>
        </div>

        {/* ✅ Grid now properly prevents sidebar scrolling */}
        <div 
          className={styles.grid} 
          ref={gridRef} 
          onMouseEnter={() => setIsInsideGrid(true)} // ✅ Detect when inside grid
          onMouseLeave={() => setIsInsideGrid(false)} // ✅ Detect when leaving grid
        >
          {[
            { id: 1, year: "2023", title: "departx", image: "/images/departx.png", link: "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(39).png" },
            { id: 2, year: "2021", title: "me and me", image: "/images/me and me.png", link: "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(40).png" },
            { id: 3, year: "2022", title: "Next Me", image: "/images/nextgo.png", link: "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(34).png" },
            { id: 4, year: "2022", title: "Suprabadham", image: "/images/suprabadham.png", link: "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(35).png" },
            { id: 5, year: "2022", title: "taxgo", image: "/images/taxgo.png", link: "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(32).png" },
            { id: 6, year: "2022", title: "We Collect,Deliver", image: "/images/we collect,deliver.png", link: "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/Screenshot+(31).png" },
          ].map((item) => (
            <div key={item.id} className={styles.projectItem}>
              <a href={item.link} className={styles.projectLink}>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.image} />
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
  );
};

export default Projects;
