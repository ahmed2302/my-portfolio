import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { FaCode, FaPalette, FaTools } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import Section from "../common/Section";

const SkillProgress = ({ skill, isDarkMode, index }) => {
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

  // Spring animation for smoother motion
  const progress = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  // Update progress when in view
  React.useEffect(() => {
    if (isInView) {
      progress.set(skill.level);
    }
  }, [isInView, skill.level, progress]);

  // Transform progress to width percentage
  const width = useTransform(progress, (value) => `${value}%`);

  return (
    <motion.div
      ref={progressRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <motion.span
          className={isDarkMode ? "text-light" : "text-dark"}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}>
          {skill.name}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{
            duration: 0.3,
            delay: 0.4 + index * 0.1,
            type: "spring",
            stiffness: 200,
          }}
          className={`${
            isDarkMode ? "text-light" : "text-muted"
          } small fw-medium`}>
          {skill.level}%
        </motion.span>
      </div>
      <div
        className="position-relative rounded-pill overflow-hidden"
        style={{
          height: "10px",
          backgroundColor: isDarkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(0, 0, 0, 0.1)",
          boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
        }}>
        <motion.div
          className="position-absolute h-100 rounded-pill"
          style={{
            width,
            background: isDarkMode
              ? "linear-gradient(90deg, var(--bs-primary) 0%, var(--bs-primary) 100%)"
              : "linear-gradient(90deg, var(--bs-primary) 0%, var(--bs-primary) 100%)",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          }}
          initial={{ width: "0%" }}
          animate={isInView ? { width } : { width: "0%" }}
          transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
        />
        <motion.div
          className="position-absolute h-100 w-100"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
            transform: "translateX(-100%)",
          }}
          animate={
            isInView
              ? {
                  transform: ["translateX(-100%)", "translateX(100%)"],
                  transition: {
                    duration: 1.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeInOut",
                    repeat: 1,
                    repeatDelay: 0.5,
                  },
                }
              : { transform: "translateX(-100%)" }
          }
        />
      </div>
    </motion.div>
  );
};

const About = () => {
  const { isDarkMode } = useTheme();

  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
    design: [
      { name: "UI/UX Design", level: 85 },
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 85 },
      { name: "Adobe Photoshop", level: 80 },
      { name: "Adobe Illustrator", level: 75 },
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Responsive Design", level: 90 },
      { name: "Web Accessibility", level: 85 },
      { name: "Performance Optimization", level: 80 },
    ],
  };

  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      skills: skills.frontend,
      description:
        "Building modern, responsive web applications with cutting-edge technologies",
    },
    {
      icon: <FaPalette />,
      title: "Graphic Design",
      skills: skills.design,
      description:
        "Creating beautiful and intuitive user interfaces with a focus on user experience",
    },
    {
      icon: <FaTools />,
      title: "Development Tools",
      skills: skills.tools,
      description:
        "Utilizing industry-standard tools and best practices for efficient development",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smoother motion
      },
    },
  };

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="My skills and expertise"
      className="position-relative">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.p
              variants={itemVariants}
              className={`lead ${isDarkMode ? "text-light" : "text-dark"}`}
              style={{ opacity: 0.9 }}>
              I'm a passionate Frontend Developer and Graphic Designer with a
              keen eye for design and a strong foundation in modern web
              technologies. I specialize in creating beautiful, functional, and
              user-centered digital experiences.
            </motion.p>
          </Col>
        </Row>

        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col key={index} lg={4}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`h-100 p-4 rounded-3 ${
                  isDarkMode ? "bg-dark" : "bg-light"
                }`}
                style={{
                  boxShadow: isDarkMode
                    ? "0 4px 20px rgba(0, 0, 0, 0.15)"
                    : "0 4px 20px rgba(0, 0, 0, 0.05)",
                  border: isDarkMode
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                  transform: "translateY(0)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                whileHover={{
                  transform: "translateY(-5px)",
                  boxShadow: isDarkMode
                    ? "0 8px 30px rgba(0, 0, 0, 0.2)"
                    : "0 8px 30px rgba(0, 0, 0, 0.1)",
                }}>
                <motion.div variants={itemVariants}>
                  <div className="d-flex align-items-center mb-4">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className={`rounded-circle p-3 me-3 ${
                        isDarkMode ? "bg-primary" : "bg-primary bg-opacity-10"
                      }`}>
                      <span
                        className={`fs-4 ${
                          isDarkMode ? "text-white" : "text-primary"
                        }`}>
                        {category.icon}
                      </span>
                    </motion.div>
                    <motion.h3
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.1,
                      }}
                      className="h4 mb-0">
                      {category.title}
                    </motion.h3>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                    }}
                    className={`mb-4 ${
                      isDarkMode ? "text-light" : "text-muted"
                    }`}>
                    {category.description}
                  </motion.p>

                  {category.skills.map((skill, skillIndex) => (
                    <SkillProgress
                      key={skillIndex}
                      skill={skill}
                      isDarkMode={isDarkMode}
                      index={skillIndex}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default About;
