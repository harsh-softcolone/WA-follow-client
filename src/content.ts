import "./index.css";
import "./styles/content.css";

const isWhatsAppFullyLoaded = (): boolean => {
  // Check if main WhatsApp container is loaded
  const chatList = document.querySelectorAll("div[role=listitem]").length;
  const appWrapper = document.querySelector(".app-wrapper-web");
  return chatList > 0 && !!appWrapper;
};

const waitForWhatsAppLoad = (): Promise<void> => {
  return new Promise((resolve) => {
    if (isWhatsAppFullyLoaded()) {
      resolve();
      return;
    }

    const observer = new MutationObserver(() => {
      if (isWhatsAppFullyLoaded()) {
        observer.disconnect();
        resolve();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};

// Track if extension has been injected
let extensionInjected = false;

const injectExtension = async () => {
  if (window.location.hostname === "web.whatsapp.com") {
    try {
      // Wait for WhatsApp to be fully loaded
      await waitForWhatsAppLoad();
      console.log("WhatsApp fully loaded, checking extension...");

      // Only inject if not already injected
      if (!extensionInjected) {
        console.log("Injecting extension...");

        // Remove any existing mount points (safety check)
        const existingMount = document.getElementById(
          "whatsapp-extension-root"
        );
        if (existingMount) {
          existingMount.remove();
        }

        // Create new mount point
        const mountPoint = document.createElement("div");
        mountPoint.id = "whatsapp-extension-root";
        document.body.appendChild(mountPoint);

        // Create script element for main.js
        const script = document.createElement("script");
        script.src = chrome.runtime.getURL("main.js");
        script.type = "module";
        document.body.appendChild(script);

        // Mark as injected
        extensionInjected = true;
      } else {
        console.log("Extension already injected, skipping...");
      }
    } catch (error) {
      console.error("Error injecting extension:", error);
    }
  }
};

// Watch for both hash changes and history state updates
const watchForNavigationChanges = () => {
  // Listen for hash changes
  window.addEventListener("hashchange", () => {
    console.log("Hash changed:", location.hash);
    // Don't reinject, let the React router handle it
  });

  // Watch for URL changes via MutationObserver (backup method)
  let lastUrl = location.href;
  new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      // Don't reinject on URL change, only ensure it's injected initially
      if (!extensionInjected) {
        injectExtension();
      }
    }
  }).observe(document, { subtree: true, childList: true });
};

// Initial injection
injectExtension();

// Start watching for navigation changes
watchForNavigationChanges();

// Handle messages
window.addEventListener("message", (event) => {
  if (event.source !== window) return;
  const message = event.data;

  if (message && message.type === "FETCH_TODOS_REQUEST") {
    // console.log("Content script received fetch todos request:", message);

    chrome.runtime.sendMessage(
      {
        type: "FETCH_TODOS",
        data: message.data,
      },
      (response) => {
        // console.log("Content script received todos from background:", response);

        window.postMessage(
          {
            type: "FETCH_TODOS_RESPONSE",
            response,
          },
          "*"
        );
      }
    );
  } else if (message && message.type === "LOGIN_REQUEST") {
    // console.log("Content script received login request:", message);
    chrome.runtime.sendMessage(
      {
        type: "LOGIN",
        data: message.data,
      },
      (response) => {
        // console.log("Content script received login response:", response);

        window.postMessage(
          {
            type: "LOGIN_RESPONSE",
            response,
          },
          "*"
        );
      }
    );
  } else if (message && message.type === "SWITCH_NUMBER_REQUEST") {
    // console.log("Content script received switch number request:", message);
    chrome.runtime.sendMessage(
      {
        type: "SWITCH_NUMBER",
        data: message.data,
      },
      (response) => {
        // console.log("Content script received switch number response:", response);
        window.postMessage(
          {
            type: "SWITCH_NUMBER_RESPONSE",
            response,
          },
          "*"
        );
      }
    );
  }
});
