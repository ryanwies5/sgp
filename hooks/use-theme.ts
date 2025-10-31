"use client";

import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const context = useNextTheme();

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
