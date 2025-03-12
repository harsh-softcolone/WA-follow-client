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

const injectExtension = async () => {
  if (window.location.hostname === "web.whatsapp.com") {
    try {
      // Wait for WhatsApp to be fully loaded
      await waitForWhatsAppLoad();
      console.log("WhatsApp fully loaded, injecting extension...");

      // Remove any existing mount points
      const existingMount = document.getElementById("whatsapp-extension-root");
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
    } catch (error) {
      console.error("Error injecting extension:", error);
    }
  }
};

// Watch for both hash changes and history state updates
const watchForNavigationChanges = () => {
  let lastUrl = location.href;

  new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      injectExtension();
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
    console.log("Content script received fetch todos request:", message);

    chrome.runtime.sendMessage(
      {
        type: "FETCH_TODOS",
        data: message.data,
      },
      (response) => {
        console.log("Content script received todos from background:", response);

        window.postMessage(
          {
            type: "FETCH_TODOS_RESPONSE",
            response,
          },
          "*"
        );
      }
    );
  }
});
