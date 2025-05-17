import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Loader = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
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
        ease: "easeOut",
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const loaderStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: isDarkMode
      ? "rgba(33, 37, 41, 0.95)"
      : "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(8px)",
    zIndex: 9999,
  };

  const iconStyle = {
    fontSize: "3rem",
    color: isDarkMode ? "#0d6efd" : "#0d6efd",
    marginBottom: "1rem",
  };

  const textStyle = {
    color: isDarkMode ? "#fff" : "#212529",
    fontSize: "1.2rem",
    fontWeight: 500,
  };

  return (
    <motion.div
      style={loaderStyle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <motion.div
        variants={itemVariants}
        animate={{
          rotate: 360,
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          },
        }}>
        <FaCode style={iconStyle} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <span style={textStyle}>Loading Portfolio...</span>
      </motion.div>
      <motion.div
        variants={itemVariants}
        style={{
          width: "100px",
          height: "4px",
          backgroundColor: isDarkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(0, 0, 0, 0.1)",
          borderRadius: "2px",
          marginTop: "1rem",
          overflow: "hidden",
        }}>
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#0d6efd",
            borderRadius: "2px",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
