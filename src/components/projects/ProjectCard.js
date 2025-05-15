import React from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const ProjectCard = ({ project }) => {
  const { isDarkMode } = useTheme();
  const { title, description, image, tags, githubUrl, liveUrl } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}>
      <Card
        className={`h-100 ${
          isDarkMode
            ? "bg-dark text-light border-secondary"
            : "bg-light text-dark"
        }`}>
        <div className="position-relative">
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="position-absolute top-0 end-0 p-2">
            {githubUrl && (
              <Button
                variant={isDarkMode ? "light" : "dark"}
                size="sm"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="me-2">
                <FaGithub />
              </Button>
            )}
            {liveUrl && (
              <Button
                variant={isDarkMode ? "light" : "dark"}
                size="sm"
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </Button>
            )}
          </div>
        </div>

        <Card.Body>
          <Card.Title className="h5 mb-3">{title}</Card.Title>
          <Card.Text className="mb-3">{description}</Card.Text>
          <div className="d-flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`badge ${
                  isDarkMode ? "bg-secondary" : "bg-primary"
                }`}>
                {tag}
              </span>
            ))}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
