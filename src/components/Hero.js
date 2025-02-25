import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import styles from "../styles/Hero.module.css";
import Awards from "../components/Awards";
import OurCustomers from "../components/OurCustomers";
import Plans from "./Plans";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";
import Start from "../components/Start";

const sections = [
  { id: "home", title: "Home", Component: null },
  { id: "awards", title: "Awards", Component: Awards },
  { id: "customers", title: "Customers", Component: OurCustomers },
  { id: "plans", title: "Plans", Component: Plans },
  { id: "projects", title: "Projects", Component: Projects },
  { id: "blogs", title: "Blog", Component: Blogs },
  { id: "footers", title: "Footers", Component: Footers },
];

const Hero = ({ onFooterActive }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [showStartModal, setShowStartModal] = useState(false);
  const [isFooterActive, setIsFooterActive] = useState(false);
  const isScrolling = useRef(false);
  const isInsideGrid = useRef(false);
  const isInsideBlogs = useRef(false);

  const { scrollYProgress } = useViewportScroll();
  const logoX = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleStartClick = () => {
    setShowStartModal(true);
  };

  const handleCloseModal = () => {
    setShowStartModal(false);
  };

  const handleScroll = (e) => {
    if (isScrolling.current) return;

    if (isInsideBlogs.current && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.stopPropagation();
      return;
    }

    if (isInsideGrid.current) {
      e.stopPropagation();
      return;
    }

    isScrolling.current = true;
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);

    setActiveSection((prev) => {
      let newSection = prev;
      if (e.deltaY > 0 && prev < sections.length - 1) {
        newSection = prev + 1;
      } else if (e.deltaY < 0 && prev > 0) {
        newSection = prev - 1;
      }

      const isFooter = sections[newSection]?.id === "footers";
      setIsFooterActive(isFooter);
      onFooterActive(isFooter); // Update footer state

      return newSection;
    });
  };

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.addEventListener("wheel", handleScroll, { passive: false });
    }
    return () => {
      heroSection.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("Active Section:", activeSection);
  }, [activeSection]);

  const ActiveComponent = sections[activeSection].Component;


  return (
    <>
      {!isFooterActive && <Navbar />} {/* Hide Navbar when Footer is active */}

      <div id="hero-section" className={styles.hero}>
      <motion.div
        className={styles.animatedBall}
        animate={{
          x: (activeSection * 200) + (Math.random() * 100 - 50), // Adds randomness
          y: (activeSection * 150) + (Math.random() * 80 - 40),  // Adds randomness
        }}
        transition={{
          type: "spring", 
          stiffness: 200,  // Increase for a snappier movement
          damping: 12,     // Reduce damping to make it bouncier
          mass: 0.5        // Lighter mass makes it move faster
        }}
      ></motion.div>

        {activeSection < 4 && (
          <div className={styles.sidebar}>
            <div className={styles.lineBar}>
              <div
                className={styles.pointer}
                style={{ top: `${(activeSection / (sections.length - 1)) * 100}%` }}
              ></div>
            </div>

            <div
              className={styles.sidebarLabels}
              style={{ top: `${(activeSection / (sections.length - 1)) * 100}%` }}
            >
              {sections.map((section, index) => (
                <span key={section.id} className={index === activeSection ? styles.activeLabel : ""}>
                  {section.title}
                </span>
              ))}
            </div>
          </div>
        )}

        <motion.section
          className={styles.section}
          style={activeSection === 0 ? {} : { minHeight: "100vh", paddingTop: "100px" }}
        >
          {ActiveComponent ? (
            activeSection === 4 ? (
              <Projects setIsInsideGrid={(state) => (isInsideGrid.current = state)} />
            ) : activeSection === 5 ? (
              <Blogs setIsInsideBlogs={(state) => (isInsideBlogs.current = state)} />
            ) : (
              <>
                <ActiveComponent />
                {activeSection === 1 || activeSection === 6 ? (
                  <div className={styles.logoWrapper}>
                    <motion.img
                      className={styles.logoImage}
                      src="/center-logo.png"
                      alt="Company Logo"
                      style={{ x: logoX, y: logoY, filter: "blur(8px)", backgroundColor: "transparent", width: "75%" }}
                      transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 15,
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </div>
                ) : null}
              </>
            )
          ) : (
            <div className={styles.heroContent}>
              <h2 className={styles.subtitle}>Bespoke websites that</h2>
              <h1>
                <span className={styles.title}>WOW!</span>
              </h1>
              <button className={styles.startButton} onClick={handleStartClick}>
                Start now
              </button>
              <p style={{ position: "absolute", top: 10, left: 10, color: "red", zIndex: 9999 }}>
                Active Section: {activeSection}
              </p>

              <div className={styles.logoWrapper}>
                <motion.img
                  className={styles.logoImage}
                  src="/center-logo.png"
                  alt="Company Logo"
                  style={{ x: logoX, y: logoY }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 20,
                    duration: 1.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </div>
            </div>
          )}
        </motion.section>
      </div>

      {showStartModal && <Start onClose={handleCloseModal} />}
    </>
  );
};

export default Hero;
