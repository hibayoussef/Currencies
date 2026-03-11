"use client";

import { useState, useEffect, useCallback } from "react";
import { THEME_LIGHT, THEME_DARK, Theme } from "@/constants/theme";

/**
 * ThemeToggle component: toggles between light and dark mode, persists in localStorage.
 */
export const ThemeToggle = () => {
  // Initialize with THEME_LIGHT to avoid SSR mismatch
  const [theme, setTheme] = useState<Theme>(THEME_LIGHT);

  // On mount, sync theme from localStorage or system preference
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === THEME_DARK || stored === THEME_LIGHT) {
      setTheme(stored as Theme);
    } else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme(THEME_DARK);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === THEME_DARK);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleToggle = useCallback(() => {
    setTheme((prev) => (prev === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  }, []);

  // ...existing code...
  return (
    <button
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 px-3 py-2 rounded bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white shadow hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
    >
      {theme === THEME_DARK ? "🌙" : "☀️"}
    </button>
  );
};
