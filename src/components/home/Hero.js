import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className={`min-vh-100 d-flex align-items-center ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}>
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible">
              <motion.h1
                variants={itemVariants}
                className="display-4 fw-bold mb-3">
                Hi, I'm <span className="text-primary">Ahmed Hamdy</span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className={`h3 mb-4 ${
                  isDarkMode ? "text-light" : "text-muted"
                }`}
                style={{ opacity: isDarkMode ? 0.8 : 1 }}>
                Front-end Developer
              </motion.h2>

              <motion.p variants={itemVariants} className="lead mb-5">
                I build exceptional digital experiences that make an impact.
                Specializing in creating beautiful, functional, and
                user-centered websites.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="d-flex justify-content-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  href="#contact"
                  className="d-flex align-items-center gap-2">
                  Get in Touch
                </Button>

                <Button
                  variant={isDarkMode ? "light" : "dark"}
                  size="lg"
                  href="/Ahmed_Hamdy_CV.pdf"
                  download
                  target="_blank"
                  className="d-flex align-items-center gap-2">
                  <FaDownload /> Download CV
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-5 d-flex justify-content-center gap-4">
                <a
                  href="https://github.com/ahmed2302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`fs-4 ${isDarkMode ? "text-light" : "text-dark"}`}>
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-hamdy-khalafallah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`fs-4 ${isDarkMode ? "text-light" : "text-dark"}`}>
                  <FaLinkedin />
                </a>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
