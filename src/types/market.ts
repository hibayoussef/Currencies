export interface Market {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  price: string;
  priceChangePercent: string;
}

export interface MarketListProps {
  markets: Market[];
  loading: boolean;
  error: string | null;
  onSelect: (symbol: string) => void;
  favorites?: string[];
  onToggleFavorite?: (symbol: string) => void;
}

export interface MarketListItemProps {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  price: number;
  priceChangePercent: number;
  isFavorite?: boolean;
  onToggleFavorite?: (symbol: string) => void;
}

export interface MarketDetailsProps {
  symbol: string;
}

export interface MarketPageProps {
  params: { symbol: string };
}

export type SortType = "favorites" | "alpha" | "price" | "change";

export interface MarketToolbarProps {
  search: string;
  setSearch: (v: string) => void;
  sort: SortType;
  setSort: (v: SortType) => void;
}

export interface TickerData {
  price: string;
  priceChangePercent: string;
  eventTime: number;
}