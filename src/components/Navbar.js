import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logoContainer}>
          <img src="/logo.svg" alt="Milanco Logo" className={styles.logo} />
        </Link>

        <div className={styles.desktopNav}>
          <Link 
            to="/" 
            className={styles.navLink} 
            onClick={() => window.location.href = '/'}
          >
            HOME
          </Link>
          <Link to="/about" className={styles.navLink}>ABOUT</Link>
          <Link to="/contact" className={styles.navLink}>CONTACT</Link>
          <Link to="/portfolio" className={styles.navLink}>PORTFOLIO</Link>
          <Link to="/blog" className={styles.navLink}>BLOG</Link>
        </div>

        <div className={styles.rightSection}>
          <button className={styles.liveExpertBtn}
          onClick={() => window.open("https://wa.me/919876543210", "_blank")}>
            <img 
              src="/whatsapp3.png" 
              alt="WhatsApp" 
              width="16" 
              height="16" 
              style={{ marginRight: "8px", marginBottom: "-3px" }} 
            />
            Live Expert
          </button>

          <button 
            className={styles.mobileMenuBtn} 
            onClick={toggleMobileMenu} 
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ""}`}>
        <Link 
          to="/" 
          className={styles.mobileNavLink} 
          onClick={() => { window.location.href = '/'; toggleMobileMenu(); }}
        >
          HOME
        </Link>
        <Link to="/about" className={styles.mobileNavLink} onClick={toggleMobileMenu}>ABOUT</Link>
        <Link to="/contact" className={styles.mobileNavLink} onClick={toggleMobileMenu}>CONTACT</Link>
        <Link to="/portfolio" className={styles.mobileNavLink} onClick={toggleMobileMenu}>PORTFOLIO</Link>
        <Link to="/blog" className={styles.mobileNavLink} onClick={toggleMobileMenu}>BLOG</Link>
      </div>
    </nav>
  );
};

export default Navbar;
