export type SortType = "favorites" | "alpha" | "price" | "change";

export interface MarketToolbarProps {
  search: string;
  setSearch: (v: string) => void;
  sort: SortType;
  setSort: (v: SortType) => void;
}
