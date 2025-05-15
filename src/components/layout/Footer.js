import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

// Social media links configuration
const SOCIAL_LINKS = [
  {
    icon: <FaGithub />,
    url: "https://github.com/ahmed2302",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/ahmed-hamdy-khalafallah",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:ahmeddhhshjf@gmail.com",
    label: "Email",
  },
];

/**
 * Footer component with social links and copyright information
 * Features responsive design and theme support
 */
const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  // Styles
  const footerStyle = {
    backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
    color: isDarkMode ? "#fff" : "#212529",
    transition: "all 0.3s ease",
  };

  const linkStyle = {
    color: isDarkMode ? "#fff" : "#212529",
    transition: "color 0.3s ease",
  };

  return (
    <footer className="py-4" style={footerStyle}>
      <Container>
        <Row className="align-items-center">
          {/* Copyright */}
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              © {currentYear} Ahmed Hamdy. All rights reserved.
            </p>
          </Col>

          {/* Social Links */}
          <Col md={6}>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={linkStyle}
                  aria-label={link.label}>
                  <span className="fs-4">{link.icon}</span>
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
