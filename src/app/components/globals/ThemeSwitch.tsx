"use client";
import React from "react";
import DayNightToggleIcon from "@components/icons/DarkModeIcons";
import useTheme from "@/app/hooks/useTheme";

const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-end md:flex-1">
      <div className="pointer-events-auto">
        <button
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          className="group rounded-full bg-white/90 p-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          onClick={toggleTheme}
        >
          <DayNightToggleIcon />
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
