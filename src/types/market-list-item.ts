export interface MarketListItemProps {
	symbol: string;
	baseAsset: string;
	quoteAsset: string;
	price: number;
	priceChangePercent: number;
	isFavorite?: boolean;
	onToggleFavorite?: (symbol: string) => void;
}
