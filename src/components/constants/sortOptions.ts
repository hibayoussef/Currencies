import type { MarketToolbarSelectOption } from "@/types/ui";

export const sortOptions: MarketToolbarSelectOption[] = [
  { value: "favorites", label: "Favorites first" },
  { value: "alpha", label: "Alphabetical" },
  { value: "price", label: "Highest price" },
  { value: "change", label: "Highest 24h change" },
];
