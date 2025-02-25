import React, { useEffect, useState } from "react";
import styles from"../styles/ScrollNav.module.css"; // Ensure styles are applied

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "ourCustomers", label: "Customers" },
  { id: "packages", label: "Packages" },
  { id: "portfolio", label: "Portfolio" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
  { id: "elite", label: "Elite" },
  { id: "premium", label: "Premium" },
  { id: "advanced", label: "Advanced" },
];

const ScrollNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  const scrollToSection = (id, index) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentIndex = 0;
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            currentIndex = index;
          }
        }
      });
      setActiveIndex(currentIndex);
      setIndicatorPosition(currentIndex * 40); // Adjust spacing
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-wrapper">
      <div className="scroll-line"></div> {/* Vertical line */}
      <div className="scroll-indicator" style={{ top: `${indicatorPosition}px` }}></div> {/* Moving indicator */}
      <nav className="scroll-nav">
        <ul>
          {sections.map((section, index) => (
            <li key={section.id} className={index === activeIndex ? "active" : ""}>
              <button onClick={() => scrollToSection(section.id, index)}>
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ScrollNavigation;
