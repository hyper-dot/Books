"use client";
import * as React from "react";
import { Moon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <button className="">
      <SunIcon
        onClick={() => setTheme("light")}
        size={20}
        className="hidden dark:inline"
      />
      <Moon
        onClick={() => setTheme("dark")}
        size={20}
        className="inline dark:hidden"
      />
    </button>
  );
}
