import Router from "@/routes";
import { HashRouter } from "react-router";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { WPPProvider } from "@/providers/WPPProvider";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./hooks/AuthContext";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="wa-extension-theme">
      <AuthProvider>
        <WPPProvider>
          <HashRouter>
            <Router />
            <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
          </HashRouter>
        </WPPProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
