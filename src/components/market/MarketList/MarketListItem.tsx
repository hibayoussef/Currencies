import type { MarketListItemProps } from "@/types/market";
import React from "react";

const MarketListItemComponent: React.FC<MarketListItemProps> = ({
  symbol,
  baseAsset,
  quoteAsset,
  price,
  priceChangePercent,
  isFavorite,
  onToggleFavorite,
}) => (
  <li className="flex items-center justify-between bg-white dark:bg-zinc-900 rounded-xl shadow-md px-6 py-4 hover:bg-blue-50 dark:hover:bg-zinc-800 cursor-pointer transition-all duration-200">
    <div className="flex-1 flex items-center gap-2">
      <span className="font-bold text-lg text-blue-600 dark:text-purple-400">{symbol}</span>
      <span className="ml-2 text-xs text-gray-400">({baseAsset}/{quoteAsset})</span>
    </div>
    <div className="flex items-center gap-6">
      <span className="font-mono text-xl text-pink-600 dark:text-pink-400">{price.toLocaleString()}</span>
      <span className={
        priceChangePercent > 0
          ? "text-green-600 font-bold"
          : priceChangePercent < 0
          ? "text-red-600 font-bold"
          : "text-gray-500"
      }>
        {priceChangePercent > 0 ? "▲" : priceChangePercent < 0 ? "▼" : ""}
        {priceChangePercent.toFixed(2)}%
      </span>
      {onToggleFavorite && (
        <button
          className={
            "ml-2 text-2xl transition " +
            (isFavorite ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400")
          }
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(symbol);
          }}
        >
          ★
        </button>
      )}
      <a
        href={`/market/${symbol}`}
        className="text-purple-600 hover:text-pink-500 transition ml-2"
        target="_blank"
        rel="noopener noreferrer"
        title="details"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <circle cx="12" cy="8" r="1" />
        </svg>
      </a>
    </div>
  </li>
);

export const MarketListItem = React.memo(MarketListItemComponent);