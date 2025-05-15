import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  fullWidth = false,
}) => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id={id}
      className={`py-5 ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      } ${className}`}>
      <Container fluid={fullWidth}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}>
          {title && (
            <motion.div
              className="text-center mb-5"
              variants={containerVariants}>
              <h2 className="section-title">{title}</h2>
              {subtitle && <p className="section-subtitle">{subtitle}</p>}
            </motion.div>
          )}
          {children}
        </motion.div>
      </Container>
    </section>
  );
};

export default Section;
