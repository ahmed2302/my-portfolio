import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

// Navigation links configuration
const NAV_LINKS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "projects", label: "Projects" },
  { to: "experience", label: "Experience" },
  { to: "contact", label: "Contact" },
];

// Animation variants
const navbarVariants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

/**
 * Navigation component with responsive design and theme toggle
 * Features smooth scrolling, animations, and dark/light mode support
 */
const Navigation = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Handle scroll event for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Styles
  const navbarStyle = {
    backdropFilter: "blur(10px)",
    backgroundColor: isDarkMode
      ? "rgba(33, 37, 41, 0.8)"
      : "rgba(245, 246, 247, 0.8)",
    transition: "all 0.3s ease-in-out",
  };

  const brandStyle = {
    color: isDarkMode ? "#fff" : "#6c757d",
    transition: "color 0.3s ease",
  };

  const themeButtonStyle = {
    width: "40px",
    height: "40px",
    transition: "all 0.3s ease",
  };

  const underlineStyle = {
    height: "2px",
    backgroundColor: isDarkMode ? "#fff" : "#6c757d",
    transform: "scaleX(0)",
    transformOrigin: "right",
    transition: "transform 0.3s ease",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed-top ${scrolled ? "py-2" : "py-3"}`}
      style={navbarStyle}>
      <Container>
        <Navbar
          expand="lg"
          className="p-0"
          expanded={expanded}
          onToggle={setExpanded}>
          {/* Brand */}
          <Navbar.Brand href="#home" className="fw-bold" style={brandStyle}>
            AHMED.
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={`border-0 ${
              isDarkMode ? "navbar-dark" : "navbar-light"
            }`}
            style={{ boxShadow: "none", padding: "0.5rem" }}
          />

          {/* Navigation Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  custom={i}
                  variants={linkVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`nav-link mx-2 ${
                      isDarkMode ? "text-light" : "text-muted"
                    }`}
                    style={{
                      position: "relative",
                      transition: "color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onClick={() => setExpanded(false)}>
                    {link.label}
                    <motion.span
                      className="position-absolute bottom-0 left-0 w-100"
                      style={underlineStyle}
                      whileHover={{
                        transform: "scaleX(1)",
                        transformOrigin: "left",
                      }}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Theme Toggle Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ms-3">
                <Button
                  onClick={toggleDarkMode}
                  className={`p-2 border-0 d-flex align-items-center justify-content-center ${
                    isDarkMode ? "bg-light" : "bg-dark"
                  }`}
                  style={themeButtonStyle}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isDarkMode ? "sun" : "moon"}
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}>
                      {isDarkMode ? (
                        <FaSun className="text-dark" />
                      ) : (
                        <FaMoon className="text-light" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </motion.div>
  );
};

export default Navigation;
