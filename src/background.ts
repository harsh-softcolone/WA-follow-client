import axios from "axios";

console.log("WhatsApp Extension Background Script initialized");

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Background script received message:", request);

  if (request.type === "FETCH_TODOS") {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log("Fetched todos successfully:", response.data);
        sendResponse({ success: true, data: response.data });
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        sendResponse({
          success: false,
          error: error.message || "Unknown error occurred",
        });
      });

    return true; // Required for async `sendResponse`
  }
});
