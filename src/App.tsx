import Router from "@/routes";
import { HashRouter } from "react-router";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { WPPProvider, useWPP } from "@/providers/WPPProvider";

const AppContent = () => {
  const { isLoading } = useWPP();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
};

const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="wa-extension-theme">
        <WPPProvider>
          <AppContent />
        </WPPProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
