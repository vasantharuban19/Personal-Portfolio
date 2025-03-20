import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute top-4 right-4 z-50">
      <Button
        className="p-2 border border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white transition-transform duration-300 hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-700 shadow-md"
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Moon className="h-[1.5rem] w-[1.5rem] transition-all " />
        ) : (
          <Sun className="h-[1.5rem] w-[1.5rem] transition-all text-yellow-300" />
        )}
      </Button>
    </div>
  );
}
