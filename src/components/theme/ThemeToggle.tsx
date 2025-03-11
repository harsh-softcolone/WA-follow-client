import { Moon, Sun } from "lucide-react";
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
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500 transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-slate-900 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
