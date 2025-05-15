import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * Theme context for managing dark/light mode across the application
 * Provides isDarkMode state and toggleDarkMode function
 */
const ThemeContext = createContext();

/**
 * Custom hook to get the current theme and toggle function
 * @returns {Object} { isDarkMode: boolean, toggleDarkMode: function }
 * @throws {Error} If used outside of ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

/**
 * Theme provider component that manages the application's theme state
 * Handles theme persistence and system preference detection
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const ThemeProvider = ({ children }) => {
  // Initialize theme state with system preference or saved preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return savedTheme === "dark" || (!savedTheme && prefersDark);
    } catch (error) {
      console.error("Error reading theme preference:", error);
      return false; // Default to light theme on error
    }
  });

  // Update theme in localStorage and document when it changes
  useEffect(() => {
    try {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      document.documentElement.setAttribute(
        "data-theme",
        isDarkMode ? "dark" : "light"
      );
    } catch (error) {
      console.error("Error updating theme:", error);
    }
  }, [isDarkMode]);

  /**
   * Toggle between dark and light mode
   */
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const value = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
