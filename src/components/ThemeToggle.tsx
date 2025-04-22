"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [position, setPosition] = useState(1);

  useEffect(() => {
    if (theme === "light") setPosition(0);
    else if (theme === "system") setPosition(1);
    else if (theme === "dark") setPosition(2);
  }, [theme]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setPosition(val);
    if (val === 0) setTheme("light");
    else if (val === 1) setTheme("system");
    else setTheme("dark");
  };

  return (
    <div className="w-full max-w-fit mx-auto mt-10">
      <input
        type="range"
        min="0"
        max="2"
        step="1"
        value={position}
        onChange={handleChange}
        className="w-full appearance-none h-2 bg-neutral-300 dark:bg-neutral-700 rounded-lg focus:outline-none 
    [&::-webkit-slider-thumb]:appearance-none 
    [&::-webkit-slider-thumb]:w-4 
    [&::-webkit-slider-thumb]:h-4 
    [&::-webkit-slider-thumb]:rounded-full 
    [&::-webkit-slider-thumb]:bg-black 
    dark:[&::-webkit-slider-thumb]:bg-white 
    [&::-webkit-slider-thumb]:border 
    [&::-webkit-slider-thumb]:border-neutral-500 
    [&::-webkit-slider-thumb]:cursor-pointer 
    [&::-moz-range-thumb]:bg-black 
    dark:[&::-moz-range-thumb]:bg-white"
      />
      <div className="flex justify-between text-xs mt-1 text-neutral-600 dark:text-neutral-400">
        <span>Light</span>
        <span>System</span>
        <span>Dark</span>
      </div>
    </div>
  );

  //   return (
  //     <div className="py-10 flex gap-2 text-sm">
  //       <button
  //         className={theme === "light" ? "font-bold underline" : ""}
  //         onClick={() => setTheme("light")}
  //       >
  //         Light
  //       </button>
  //       <button
  //         className={theme === "dark" ? "font-bold underline" : ""}
  //         onClick={() => setTheme("dark")}
  //       >
  //         Dark
  //       </button>
  //       <button
  //         className={theme === "system" ? "font-bold underline" : ""}
  //         onClick={() => setTheme("system")}
  //       >
  //         System
  //       </button>
  //     </div>
  //   );
}
