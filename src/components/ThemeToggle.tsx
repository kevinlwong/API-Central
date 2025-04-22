"use client";

import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="py-10 flex gap-2 text-sm">
      <button
        className={theme === "light" ? "font-bold underline" : ""}
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className={theme === "dark" ? "font-bold underline" : ""}
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
      <button
        className={theme === "system" ? "font-bold underline" : ""}
        onClick={() => setTheme("system")}
      >
        System
      </button>
    </div>
  );
}
