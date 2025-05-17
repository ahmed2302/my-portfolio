// React and third-party imports
import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Context providers
import { ThemeProvider } from "./context/ThemeContext";

// Components
import Navigation from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Favicon from "./components/common/Favicon";
import Loader from "./components/common/Loader";

// Styles
import "./index.css";

// SEO metadata
const seoMetadata = {
  title: "Ahmed Hamdy - Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio of projects and get in touch for opportunities.",
  keywords:
    "Full Stack Developer, React, Node.js, JavaScript, Web Development, Portfolio",
  url: "https://ahmedhamdy.dev",
  image: "https://ahmedhamdy.dev/og-image.jpg",
};

/**
 * Main App component
 * Renders the portfolio website with all sections and proper SEO metadata
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (increased to 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Changed from 1500 to 3000 milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="App">
          <Favicon />
          <AnimatePresence mode="wait">
            {isLoading && <Loader />}
          </AnimatePresence>

          {/* Main Content */}
          <div
            style={{
              opacity: isLoading ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}>
            {/* SEO Metadata */}
            <Helmet>
              <title>{seoMetadata.title}</title>
              <meta name="description" content={seoMetadata.description} />
              <meta name="keywords" content={seoMetadata.keywords} />

              {/* Open Graph / Facebook */}
              <meta property="og:title" content={seoMetadata.title} />
              <meta
                property="og:description"
                content={seoMetadata.description}
              />
              <meta property="og:type" content="website" />
              <meta property="og:url" content={seoMetadata.url} />
              <meta property="og:image" content={seoMetadata.image} />

              {/* Twitter */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={seoMetadata.title} />
              <meta
                name="twitter:description"
                content={seoMetadata.description}
              />
              <meta name="twitter:image" content={seoMetadata.image} />

              {/* Canonical URL */}
              <link rel="canonical" href={seoMetadata.url} />
            </Helmet>

            {/* Main Navigation */}
            <Navigation />

            {/* Main Content */}
            <main className="main-content">
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
