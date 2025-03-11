import Router from "@/routes";
import { HashRouter } from "react-router";
import { ThemeProvider } from "@/providers/ThemeProvider";

const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="wa-extension-theme">
        <HashRouter>
          <Router />
        </HashRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
