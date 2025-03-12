import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useThemeHook } from "@/hooks/useThemeHook";

export function ThemeToggle() {
  const { theme, setTheme } = useThemeHook();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
    >
      {theme === "dark" ? (
        <FaSun className="h-[1.2rem] w-[1.2rem] text-yellow-500 transition-all" />
      ) : (
        <FaMoon className="h-[1.2rem] w-[1.2rem] text-slate-900 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
