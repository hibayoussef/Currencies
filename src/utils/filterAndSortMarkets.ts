import type { Market } from "@/types/market-list";
import { SortType } from "@/types/market-toolbar";

/**
 * Filter and sort markets by search, favorites, sort type.
 */
export function filterAndSortMarkets(
  markets: Market[],
  search: string,
  favorites: string[],
  sort: SortType
): Market[] {
  let filtered = markets;
  if (search) {
    filtered = filtered.filter((m) =>
      m.symbol.toLowerCase().includes(search.toLowerCase())
    );
  }
  switch (sort) {
    case "favorites":
      filtered = [...filtered].sort((a, b) => {
        const aFav = favorites.includes(a.symbol) ? -1 : 1;
        const bFav = favorites.includes(b.symbol) ? -1 : 1;
        if (aFav !== bFav) return aFav - bFav;
        return a.symbol.localeCompare(b.symbol);
      });
      break;
    case "alpha":
      filtered = [...filtered].sort((a, b) => a.symbol.localeCompare(b.symbol));
      break;
    case "price":
      filtered = [...filtered].sort((a, b) => Number(b.price) - Number(a.price));
      break;
    case "change":
      filtered = [...filtered].sort((a, b) => Number(b.priceChangePercent) - Number(a.priceChangePercent));
      break;
  }
  return filtered;
}
