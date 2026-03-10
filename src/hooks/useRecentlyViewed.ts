import { useEffect, useState } from "react";

/**
 * Custom hook to manage recently viewed market symbols.
 */
export function useRecentlyViewed() {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("recentlyViewed");
    if (stored) setRecent(JSON.parse(stored));
  }, []);

  const addRecent = (symbol: string) => {
    setRecent((prev) => {
      const arr = [symbol, ...prev.filter((s) => s !== symbol)].slice(0, 5);
      localStorage.setItem("recentlyViewed", JSON.stringify(arr));
      return arr;
    });
  };

  return { recent, addRecent };
}
