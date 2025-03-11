import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Function to determine the environment
const isProduction = () => {
  return window.location.hostname === "web.whatsapp.com"; // Adjust this check as needed
};

const mountApp = () => {
  // Determine the root element based on the environment
  const mountPoint = isProduction()
    ? document.getElementById("whatsapp-extension-root") // For production
    : document.getElementById("root"); // For local development

  if (mountPoint) {
    createRoot(mountPoint).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    console.error("Mount point not found");
  }
};

mountApp();

export {};
