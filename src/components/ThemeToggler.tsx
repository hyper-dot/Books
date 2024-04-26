"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <button onClick={() => setTheme(isDarkMode ? "light" : "dark")}>
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
