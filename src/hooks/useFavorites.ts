import { useEffect, useState } from "react";

/**
 * Custom hook to manage favorite market symbols.
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      // Avoid direct setState in effect body: use a microtask
      Promise.resolve().then(() => setFavorites(JSON.parse(stored)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (symbol: string) => {
    setFavorites((prev) => (prev.includes(symbol) ? prev : [...prev, symbol]));
  };

  const removeFavorite = (symbol: string) => {
    setFavorites((prev) => prev.filter((s) => s !== symbol));
  };

  const toggleFavorite = (symbol: string) => {
    if (favorites.includes(symbol)) {
      removeFavorite(symbol);
    } else {
      addFavorite(symbol);
    }
  };

  return { favorites, addFavorite, removeFavorite, toggleFavorite };
}
