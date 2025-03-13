import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Function to determine the environment
const isProduction = () => {
  return window.location.hostname === "web.whatsapp.com"; // Adjust this check as needed
};

// Only mount the app once
let hasAppMounted = false;

const mountApp = () => {
  if (hasAppMounted) {
    console.log("App already mounted, skipping");
    return;
  }

  // Determine the root element based on the environment
  const mountPoint = isProduction()
    ? document.getElementById("whatsapp-extension-root") // For production
    : document.getElementById("root"); // For local development

  if (mountPoint) {
    console.log("Mounting React app to", mountPoint.id);

    try {
      createRoot(mountPoint).render(
        <StrictMode>
          <App />
        </StrictMode>
      );

      hasAppMounted = true;
      console.log("React app successfully mounted");
    } catch (error) {
      console.error("Error mounting React app:", error);
    }
  } else {
    console.error("Mount point not found");
  }
};

// If the mount point already exists, mount immediately
// Otherwise wait for DOMContentLoaded
if (
  document.getElementById(isProduction() ? "whatsapp-extension-root" : "root")
) {
  mountApp();
} else {
  document.addEventListener("DOMContentLoaded", mountApp);
}

// Add debugging listener for hash changes to track routing
window.addEventListener("hashchange", () => {
  console.log("[main.tsx] Hash changed:", location.hash);
});

export {};
