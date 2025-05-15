import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaChartLine,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import Section from "../common/Section";
import { useTheme } from "../../context/ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const experienceData = {
    professional: {
      title: "Front-End Developer",
      subtitle: "Freelance & Personal Projects",
      period: "2021 – Present",
      icon: <FaBriefcase />,
      achievements: [
        {
          icon: <FaLaptopCode />,
          text: "Built 15+ web applications using React.js as part of personal learning and freelance work",
        },
        {
          icon: <FaChartLine />,
          text: "Achieved high performance scores (95%+ on Lighthouse) through optimized design",
        },
        {
          icon: <FaLightbulb />,
          text: "Applied modern techniques like lazy loading and code splitting to enhance performance",
        },
        {
          icon: <FaUsers />,
          text: "Participated in small team projects and shared knowledge of React best practices",
        },
      ],
    },
    education: {
      title: "Bachelor of Computer Science & Artificial Intelligence",
      subtitle: "Information Technology Department – Sohag University",
      period: "2021 – 2025 (Expected Graduation: 2025)",
      icon: <FaGraduationCap />,
      details: {
        gpa: "Very Good",
        thesis: "Optimizing React Component Performance",
        coursework: ["Data Structures", "Algorithms", "Web Development"],
      },
    },
  };

  const ExperienceCard = ({ data, type }) => {
    return (
      <motion.div
        key={`${type}-${isDarkMode}`}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={`h-100 p-4 rounded-3 ${isDarkMode ? "bg-dark" : "bg-light"}`}
        style={{
          boxShadow: isDarkMode
            ? "0 4px 20px rgba(0, 0, 0, 0.15)"
            : "0 4px 20px rgba(0, 0, 0, 0.05)",
          border: isDarkMode
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}>
        <div className="d-flex align-items-center mb-4">
          <div
            className={`rounded-circle p-3 me-3 ${
              isDarkMode
                ? "bg-primary bg-opacity-25"
                : "bg-primary bg-opacity-10"
            }`}>
            <span className="fs-4 text-primary">{data.icon}</span>
          </div>
          <div>
            <h3
              className={`h4 mb-1 ${isDarkMode ? "text-light" : "text-dark"}`}>
              {data.title}
            </h3>
            <p className={`mb-0 ${isDarkMode ? "text-light" : "text-muted"}`}>
              {data.subtitle}
            </p>
            <small className={`${isDarkMode ? "text-light" : "text-muted"}`}>
              {data.period}
            </small>
          </div>
        </div>

        {type === "professional" ? (
          <ul className="list-unstyled mb-0">
            {data.achievements.map((achievement, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="d-flex align-items-start mb-3">
                <span className="me-3 mt-1 text-primary">
                  {achievement.icon}
                </span>
                <span className={isDarkMode ? "text-light" : "text-dark"}>
                  {achievement.text}
                </span>
              </motion.li>
            ))}
          </ul>
        ) : (
          <div className={isDarkMode ? "text-light" : "text-dark"}>
            <div className="mb-3">
              <strong className="text-primary">GPA:</strong>{" "}
              <span className={isDarkMode ? "text-light" : "text-dark"}>
                {data.details.gpa}
              </span>
            </div>
            <div className="mb-3">
              <strong className="text-primary">Thesis:</strong>{" "}
              <span className={isDarkMode ? "text-light" : "text-dark"}>
                {data.details.thesis}
              </span>
            </div>
            <div>
              <strong className="text-primary">Relevant Coursework:</strong>
              <ul className="list-unstyled mt-2 mb-0">
                {data.details.coursework.map((course, index) => (
                  <li key={index} className="mb-1">
                    <span className="text-primary me-2">•</span>
                    <span className={isDarkMode ? "text-light" : "text-dark"}>
                      {course}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <Section
      id="experience"
      title="Experience & Education"
      subtitle={
        <p className={`${isDarkMode ? "text-light" : "text-muted"} mb-0`}>
          My professional journey and academic background
        </p>
      }>
      <Container>
        <AnimatePresence mode="wait">
          <motion.div
            key={isDarkMode ? "dark" : "light"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={{ once: false }}
            className="position-relative">
            <Row className="g-4">
              <Col lg={6}>
                <ExperienceCard
                  data={experienceData.professional}
                  type="professional"
                />
              </Col>
              <Col lg={6}>
                <ExperienceCard
                  data={experienceData.education}
                  type="education"
                />
              </Col>
            </Row>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default Experience;
