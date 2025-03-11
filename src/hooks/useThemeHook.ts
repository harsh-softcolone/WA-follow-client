import { ThemeProviderContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const useThemeHook = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
