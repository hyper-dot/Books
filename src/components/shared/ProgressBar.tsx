"use client";
import { AppProgressBar } from "next-nprogress-bar";
import { useTheme } from "next-themes";

export default function ProgressBar({ height = "3.5px" }: { height?: string }) {
  const { theme } = useTheme();
  const color = theme === "light" ? "#212121" : "#ffffff";
  return (
    <AppProgressBar
      color={color}
      height={height}
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
