// React and ReactDOM imports
import React from "react";
import ReactDOM from "react-dom/client";

// Application imports
import App from "./App";
import "./index.css";

/**
 * Root element ID where the React application will be mounted
 */
const ROOT_ELEMENT_ID = "root";

// Create root and render application
const root = ReactDOM.createRoot(document.getElementById(ROOT_ELEMENT_ID));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
