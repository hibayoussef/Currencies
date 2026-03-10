
export interface MarketListProps {
  markets: Market[];
  loading: boolean;
  error: string | null;
  onSelect: (symbol: string) => void;
  favorites?: string[];
  onToggleFavorite?: (symbol: string) => void;
}
export interface Market {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  price: string;
  priceChangePercent: string;
}
