// React and third-party imports
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="App">
          {/* SEO Metadata */}
          <Helmet>
            <title>{seoMetadata.title}</title>
            <meta name="description" content={seoMetadata.description} />
            <meta name="keywords" content={seoMetadata.keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={seoMetadata.title} />
            <meta property="og:description" content={seoMetadata.description} />
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
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
