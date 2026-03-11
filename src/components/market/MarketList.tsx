import type { MarketListProps } from "@/types/market";
import { MarketListSkeleton } from "./MarketList/MarketListSkeleton";
import { MarketListError } from "./MarketList/MarketListError";
import { MarketListEmpty } from "./MarketList/MarketListEmpty";
import { MarketListItem } from "./MarketList/MarketListItem";

export const MarketList: React.FC<MarketListProps> = ({
  markets,
  loading,
  error,
  onSelect,
  favorites = [],
  onToggleFavorite,
}) => {
  if (loading) return <MarketListSkeleton />;
  if (error)
    return (
      <div>
        <MarketListError error={error} />
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    );
  if (!markets.length) return <MarketListEmpty />;

  return (
    <ul className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-2xl shadow-xl grid gap-4">
      {markets.map((market) => (
        <MarketListItem
          key={market.symbol}
          symbol={market.symbol}
          baseAsset={market.baseAsset}
          quoteAsset={market.quoteAsset}
          price={Number(market.price)}
          priceChangePercent={Number(market.priceChangePercent)}
          isFavorite={favorites?.includes(market.symbol)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ul>
  );
};
