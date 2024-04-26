"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { useTheme } from "next-themes";

export default function ProgressBar({ height = "3px" }: { height?: string }) {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <AppProgressBar
      height={height}
      color={isDarkMode ? "white" : "black"}
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
