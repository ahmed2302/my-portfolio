import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaPalette,
  FaMobile,
  FaServer,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import Section from "../common/Section";
import { useTheme } from "../../context/ThemeContext";

// Project data structure - you can update these details later
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform with Admin Dashboard",
    description:
      "A full-stack e-commerce solution with comprehensive admin features, built with React and Laravel. Features secure authentication, advanced product management, and real-time order tracking.",
    image: "images/ecommerce.png",
    tags: ["React", "Laravel", "MySQL", "REST API", "React Hooks"],
    githubUrl: "https://github.com/ahmed2302/e-commerce.git",
    liveUrl: "https://e-commerce-232.netlify.app/",
    category: "fullstack",
    features: [
      "Secure user authentication and authorization",
      "Advanced product search and filtering",
      "Admin dashboard for product/order management",
      "Real-time order tracking system",
      "Optimized performance and secure checkout",
      "State management with React Hooks",
    ],
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my projects and skills. Built with React, featuring smooth animations, dark mode, and a clean user interface.",
    image: "images/portofolio.png",
    tags: [
      "React",
      "React Bootstrap",
      "Framer Motion",
      "Context API",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/ahmed2302/my-portfolio.git",
    // liveUrl: "https://portfolio-ahmed-hamdy.netlify.app/",
    category: "frontend",
    features: [
      "Responsive and modern design",
      "Dark/Light mode toggle",
      "Smooth animations and transitions",
      "Project showcase with filtering",
      "Interactive UI components",
      "SEO optimized",
    ],
  },
  {
    id: 3,
    title: "TV-Flix – Movie Discovery App",
    description:
      "A modern movie and TV show discovery platform integrated with TMDB API, featuring dynamic routing and efficient state management.",
    image: "images/tvflix.png",
    tags: ["React", "TMDB API", "React Router", "React Hooks", "CSS3"],
    githubUrl: "https://github.com/ahmed2302/tvflix-movies.git",
    liveUrl: "https://tvflix-movies.netlify.app/",
    category: "frontend",
    features: [
      "Browse and search trending content",
      "Dynamic routing with react-router",
      "Advanced filtering and sorting",
      "Responsive design",
      "Efficient state management with Hooks",
    ],
  },
  {
    id: 4,
    title: "Social Club – Social Media Platform",
    description:
      "A full-stack social media platform with real-time features, built with React and Laravel. Implements modern state management and secure session handling.",
    image: "images/social.png",
    tags: ["React", "Laravel", "MySQL", "WebSocket", "Context API"],
    githubUrl: "https://github.com/ahmed2302/Social-Club-Website.git",
    liveUrl: "https://social-club-website.netlify.app/",
    category: "fullstack",
    features: [
      "User authentication and profile management",
      "Real-time posts and comments",
      "Session handling with localStorage",
      "State management with Context API",
      "Responsive design and modern UI",
    ],
  },
  {
    id: 5,
    title: "Grilli – Restaurant Website",
    description:
      "A responsive restaurant website featuring modern design, smooth animations, and interactive elements. Built with vanilla web technologies.",
    image: "images/grili.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/ahmed2302/Grilli-website.git",
    liveUrl: "https://grilli-amazing-restaurant-website.netlify.app/",
    category: "frontend",
    features: [
      "Responsive menu showcase",
      "Customer testimonials section",
      "Interactive contact form",
      "Smooth animations and transitions",
      "Mobile-first approach",
    ],
  },
  {
    id: 6,
    title: "Advanced To-Do List",
    description:
      "A feature-rich task management application with multi-language support and advanced state management. Built with React and Material UI.",
    image: "images/todolist.png",
    tags: ["React", "Material UI", "i18n", "Context API", "useReducer"],
    githubUrl: "https://github.com/ahmed2302/to-do-list-react-v2.0.git",
    liveUrl: "https://to-do-list-react-v2.netlify.app/",
    category: "frontend",
    features: [
      "Bilingual support (Arabic/English)",
      "Advanced state management",
      "Task CRUD operations",
      "Status updates and filtering",
      "LocalStorage persistence",
      "Accessibility features",
    ],
  },
  {
    id: 7,
    title: "Prayers Timings App",
    description:
      "A location-based prayer times application with Hijri calendar integration and notification features. Built with React and modern web APIs.",
    image: "images/pryertime.png",
    tags: [
      "React",
      "Prayer Times API",
      "Notifications API",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/ahmed2302/prayers-timings-react.git",
    liveUrl: "https://keen-basbousa-76a21e.netlify.app/",
    category: "frontend",
    features: [
      "Location-based prayer times",
      "Hijri calendar integration",
      "Prayer time notifications",
      "Clean, responsive UI",
      "Offline support",
    ],
  },
  {
    id: 8,
    title: "Weather App",
    description:
      "A real-time weather forecasting application using OpenWeather API. Features 5-day forecast and location-based weather information.",
    image: "images/weatherapp.png",
    tags: ["React", "OpenWeather API", "React Hooks", "Geolocation API"],
    githubUrl: "https://github.com/ahmed2302/Weather-App-v1.0.git",
    liveUrl: "https://ahmed2302.github.io/Weather-App-v1.0/",
    category: "frontend",
    features: [
      "5-day weather forecast",
      "Location-based weather",
      "Search by city name",
      "Responsive design",
      "Real-time updates",
    ],
  },
  {
    id: 9,
    title: "Corporate Website Template",
    description:
      "A professional corporate website template featuring modern design principles, responsive layout, and optimized performance. Perfect for businesses and organizations.",
    image: "images/kasper.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Bootstrap"],
    githubUrl: "https://github.com/ahmed2302/Kasper-Template-Two-Website.git",
    liveUrl: "https://ahmed2302.github.io/Kasper-Template-Two-Website/",
    category: "design",
    features: [
      "Modern and professional design",
      "Responsive navigation menu",
      "Service showcase section",
      "Team member profiles",
      "Contact form with validation",
      "Testimonials carousel",
    ],
  },
  {
    id: 10,
    title: "Portfolio Template",
    description:
      "A clean and modern portfolio template designed for creative professionals. Features smooth animations and a focus on showcasing work effectively.",
    image: "images/templatethree.png",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
    githubUrl: "https://github.com/ahmed2302/Template-Three-Website.git",
    liveUrl: "https://ahmed2302.github.io/Template-Three-Website/",
    category: "design",
    features: [
      "Project showcase grid",
      "Smooth scroll animations",
      "Filterable portfolio items",
      "About section with skills",
      "Contact form with map integration",
      "Blog section template",
    ],
  },
  {
    id: 11,
    title: "Landing Page Template",
    description:
      "A high-converting landing page template with modern design elements and optimized for user engagement. Perfect for product launches and marketing campaigns.",
    image: "images/landing.png",
    tags: ["HTML5", "CSS3", "JavaScript", "AOS", "Responsive Design"],
    githubUrl: "https://github.com/ahmed2302/Lion-Template-One-Website.git",
    liveUrl: "https://ahmed2302.github.io/Lion-Template-One-Website/",
    category: "design",
    features: [
      "Hero section with CTA",
      "Feature highlights",
      "Pricing tables",
      "Testimonials section",
      "Newsletter subscription",
      "Social proof elements",
    ],
  },
  {
    id: 12,
    title: "Admin Dashboard Template",
    description:
      "A comprehensive admin dashboard template with modern UI components and data visualization. Built for efficient management and monitoring.",
    image: "images/dashboard.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Responsive Design"],
    githubUrl:
      "https://github.com/ahmed2302/Dashboard-Template-Four-Website.git",
    liveUrl: "https://ahmed2302.github.io/Dashboard-Template-Four-Website/",
    category: "design",
    features: [
      "Responsive sidebar navigation",
      "Data visualization charts",
      "User management interface",
      "Statistics dashboard",
      "Table with sorting and filtering",
      "Notification system",
    ],
  },
  {
    id: 13,
    title: "Hangman Game",
    description:
      "An interactive Hangman word-guessing game with visual feedback and engaging animations. Built with React and modern web technologies.",
    image: "images/hangman.png",
    tags: ["React", "React Hooks", "CSS3", "Game Logic", "Responsive Design"],
    githubUrl: "https://github.com/ahmed2302/Hang-Man-Game-v1.0.git",
    liveUrl: "https://ahmed2302.github.io/Hang-Man-Game-v1.0/",
    category: "frontend",
    features: [
      "Visual feedback for correct/incorrect guesses",
      "Animated hangman drawing",
      "Word categories and difficulty levels",
      "Score tracking and high scores",
      "Responsive design and keyboard support",
    ],
  },
  {
    id: 14,
    title: "Quiz Application",
    description:
      "An interactive quiz application with multiple categories, score tracking, and real-time feedback. Features a modern UI and smooth animations.",
    image: "images/quiz.png",
    tags: ["React", "React Hooks", "CSS3", "Game Logic", "LocalStorage"],
    githubUrl: "https://github.com/ahmed2302/Quiz-App-v1.0.git",
    liveUrl: "https://ahmed2302.github.io/Quiz-App-v1.0/",
    category: "frontend",
    features: [
      "Multiple quiz categories",
      "Real-time score tracking",
      "Timer for each question",
      "Progress tracking",
      "Results summary and statistics",
    ],
  },
  {
    id: 15,
    title: "Memory Card Game",
    description:
      "A classic memory card matching game with smooth animations and engaging gameplay. Test your memory and concentration skills.",
    image: "images/memorycard.png",
    tags: ["React", "React Hooks", "CSS3", "Game Logic", "Animations"],
    githubUrl: "https://github.com/ahmed2302/Memory-Game-v1.0.git",
    liveUrl: "https://ahmed2302.github.io/Memory-Game-v1.0/",
    category: "frontend",
    features: [
      "Multiple difficulty levels",
      "Card flip animations",
      "Score tracking and timer",
      "Best time records",
      "Responsive grid layout",
    ],
  },
  {
    id: 16,
    title: "Typing Speed Test",
    description:
      "A modern typing speed test application that helps users improve their typing skills with real-time feedback and detailed statistics.",
    image: "images/typingspeed.png",
    tags: ["React", "React Hooks", "CSS3", "Performance", "Analytics"],
    githubUrl: "https://github.com/ahmed2302/Typing-Speed-Test-Game-v1.0.git",
    liveUrl: "https://ahmed2302.github.io/Typing-Speed-Test-Game-v1.0/",
    category: "frontend",
    features: [
      "Real-time typing speed calculation",
      "Accuracy tracking and error highlighting",
      "Multiple test durations",
      "Detailed performance statistics",
      "Custom text passages",
    ],
  },
];

// Category icon mapping
const categoryIcons = {
  web: FaCode,
  frontend: FaCode,
  fullstack: FaServer,
  mobile: FaMobile,
  design: FaPalette,
};

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Project Card Component
const ProjectCard = ({ project, isDarkMode }) => {
  const CategoryIcon = categoryIcons[project.category] || FaCode;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="h-100">
      <div
        className={`h-100 d-flex flex-column rounded-3 overflow-hidden ${
          isDarkMode ? "bg-dark" : "bg-light"
        }`}
        style={{
          boxShadow: isDarkMode
            ? "0 4px 20px rgba(0, 0, 0, 0.15)"
            : "0 4px 20px rgba(0, 0, 0, 0.05)",
          border: isDarkMode
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}>
        {/* Project Image with Hover Effect */}
        <div className="position-relative flex-shrink-0">
          <div
            className="w-100 position-relative overflow-hidden"
            style={{
              height: "200px",
              backgroundColor: isDarkMode ? "#2a2a2a" : "#f8f9fa",
            }}>
            {/* Project Image */}
            <div
              className="w-100 h-100"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.5s ease",
              }}
            />

            {/* Hover Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: isDarkMode
                  ? "rgba(0, 0, 0, 0.4)"
                  : "rgba(0, 0, 0, 0.3)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.previousSibling.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.previousSibling.style.transform = "scale(1)";
              }}
              onClick={() => window.open(project.liveUrl, "_blank")}
            />

            {/* Category Icon */}
            <div
              className="position-absolute top-0 end-0 p-2"
              style={{
                background: isDarkMode
                  ? "rgba(0, 0, 0, 0.7)"
                  : "rgba(255, 255, 255, 0.9)",
                borderBottomLeftRadius: "8px",
                zIndex: 1,
              }}>
              <CategoryIcon />
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-4 d-flex flex-column flex-grow-1">
          {/* Title and Description */}
          <div className="mb-3">
            <h3 className="h4 mb-2">{project.title}</h3>
            <p
              className={`small mb-0 ${
                isDarkMode ? "text-light" : "text-muted"
              }`}>
              {project.description}
            </p>
          </div>

          {/* Features List */}
          <div className="mb-3 flex-grow-1">
            <ul
              className={`list-unstyled mb-0 ${
                isDarkMode ? "text-light" : "text-dark"
              }`}>
              {project.features.map((feature, index) => (
                <li key={index} className="small mb-1 d-flex align-items-start">
                  <span className="me-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="d-flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`badge ${
                  isDarkMode ? "bg-primary" : "bg-primary bg-opacity-10"
                } ${isDarkMode ? "text-white" : "text-primary"}`}>
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-2 mt-auto">
            <Button
              variant={isDarkMode ? "light" : "dark"}
              size="sm"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center gap-2 flex-grow-1 justify-content-center">
              <FaGithub /> GitHub
            </Button>
            {project.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-2 flex-grow-1 justify-content-center">
                <FaExternalLinkAlt /> Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects Component
const Projects = () => {
  const { isDarkMode } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Check out some of my recent work">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <Row className="g-4">
            <AnimatePresence>
              {displayedProjects.map((project) => (
                <Col key={project.id} md={6} lg={4}>
                  <ProjectCard project={project} isDarkMode={isDarkMode} />
                </Col>
              ))}
            </AnimatePresence>
          </Row>

          {projectsData.length > 6 && (
            <motion.div
              className="text-center mt-5"
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              <Button
                variant={isDarkMode ? "light" : "dark"}
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="px-4 py-2 d-flex align-items-center gap-2 mx-auto">
                {showAll ? (
                  <>
                    Show Less <FaChevronUp />
                  </>
                ) : (
                  <>
                    Show All Projects <FaChevronDown />
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Projects;
