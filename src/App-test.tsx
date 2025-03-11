import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import darkLogo from "./assets/darkLogo.webp";
import { findAppElement } from "./lib/helpers";
import * as WPP from "@wppconnect/wa-js";
import TodoList from "./components/TodoList";

declare global {
  interface Window {
    WPP: typeof WPP; // Declare WPP on the window object
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initializeWPP = useCallback(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      if (typeof WPP?.init !== "undefined") WPP?.init();
      console.log("WPP initialized successfully");
    } catch (error) {
      console.error("Error initializing WPP:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    initializeWPP();
    findAppElement();
    // Wait for chat to load before starting observer
  }, [initializeWPP]);

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.id = "whatsapp-override-styles";
    styleElement.textContent = `
      .app-wrapper-web ._aigs:not(._as6h) {
        top: 19px !important;
        width: calc(100% - 360px) !important;
        max-width: 100% !important;
        height: calc(100% - 38px) !important;
        margin: 0 !important;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      const existingStyle = document.getElementById("whatsapp-override-styles");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {window?.WPP?.isReady && (
        <p className="text-sm text-gray-500">
          Phone Number: {window.WPP?.whatsapp.UserPrefs.getMe().user}
        </p>
      )}
      <div>
        <h2 className="text-lg font-bold">Todo List</h2>
      </div>
      <TodoList />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href="https://vite.dev"
                      target="_blank"
                      className="hover:scale-110 transition-transform"
                    >
                      <img src={darkLogo} className="h-24" alt="Vite logo" />
                    </a>
                    <a
                      href="https://react.dev"
                      target="_blank"
                      className="hover:scale-110 transition-transform"
                    >
                      <img
                        src={reactLogo}
                        className="h-24 animate-spin-slow"
                        alt="React logo"
                      />
                    </a>
                  </div>
                  <div className="text-center mt-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">
                      Vite + React
                    </h1>
                    <div className="card">
                      <button
                        onClick={() => setCount((count) => count + 1)}
                        className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm hover:bg-cyan-600 transition-colors"
                      >
                        count is {count}
                      </button>
                      <p className="mt-4 text-gray-600">
                        Edit{" "}
                        <code className="text-sm font-mono bg-gray-100 p-1 rounded">
                          src/App.tsx
                        </code>{" "}
                        and save to test HMR
                      </p>
                    </div>
                    <p className="mt-8 text-gray-500">
                      Click on the Vite and React logos to learn more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
