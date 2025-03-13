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

  if (request.type === "LOGIN") {
    console.log("Background script received login request:", request);

    // Adding headers to handle CORS and authentication
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // If you need to send any auth tokens, add them here
      },
    };

    axios
      .post(
        "http://192.168.0.137:5002/api/v1/admin/auth/extension/login",
        request.data,
        config
      )
      .then((response) => {
        console.log("Login successful:", response.data);
        sendResponse({ success: true, data: response.data });
      })
      .catch((error) => {
        console.error("Error logging in:", error.response || error);
        sendResponse({
          success: false,
          error: error.message || "Unknown error occurred",
          details: error.response ? error.response.data : null,
        });
      });

    return true; // Required for async `sendResponse`
  }

  if (request.type === "SWITCH_NUMBER") {
    console.log("Background script received switch number request:", request);

    // Adding headers to handle CORS and authentication
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // If you need to send any auth tokens, add them here
      },
    };

    axios
      .post(
        "http://192.168.0.137:5002/api/v1/admin/edit-profile-detail",
        request.data,
        config
      )
      .then((response) => {
        console.log("Login successful:", response.data);
        sendResponse({ success: true, data: response.data });
      })
      .catch((error) => {
        console.error("Error logging in:", error.response || error);
        sendResponse({
          success: false,
          error: error.message || "Unknown error occurred",
          details: error.response ? error.response.data : null,
        });
      });

    return true; // Required for async `sendResponse`
  }
});
