import React from "react";
import { MarketListSkeleton } from "./MarketList/MarketListSkeleton";
import { MarketListEmpty } from "./MarketList/MarketListEmpty";
import { MarketListError } from "./MarketList/MarketListError";
import { MarketListItem } from "./MarketList/MarketListItem";
import type { MarketListProps } from "@/types/market";

export const MarketList: React.FC<MarketListProps> = ({ markets, loading, error, onSelect, favorites = [], onToggleFavorite }) => {
  if (loading) return <MarketListSkeleton />;
  if (error) return <MarketListError error={error} />;
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
