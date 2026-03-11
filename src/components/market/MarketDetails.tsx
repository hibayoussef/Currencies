"use client";
import React from "react";
import { useMarketTicker } from "@/hooks/useMarketTicker";
import { formatNumber, formatTime } from "@/utils/format";
import { Skeleton } from "../common/Skeleton";
import type { MarketDetailsProps } from "@/types/market";

export const MarketDetails: React.FC<MarketDetailsProps> = ({ symbol }) => {
  const { data, status } = useMarketTicker(symbol);

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">{symbol} Details</h2>
      <div className="mb-4 flex items-center justify-center gap-4">
        <span className="text-sm font-medium">Status:</span>
        <span className={
          status === "connected"
            ? "text-green-600"
            : status === "connecting"
            ? "text-yellow-600"
            : "text-red-600"
        }>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      {data ? (
        <div className="flex flex-col items-center gap-2">
          <div className="text-3xl font-mono font-semibold">
            {formatNumber(data.price, 4)}
          </div>
          <div className={
            Number(data.priceChangePercent) > 0
              ? "text-green-600"
              : Number(data.priceChangePercent) < 0
              ? "text-red-600"
              : "text-gray-500"
          }>
            {Number(data.priceChangePercent) > 0 ? "+" : ""}{formatNumber(data.priceChangePercent, 2)}%
          </div>
          <div className="text-xs text-gray-400 mt-2">
            Last update: {formatTime(data.eventTime)}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="w-32 h-10 mb-2" />
          <Skeleton className="w-16 h-6 mb-2" />
          <Skeleton className="w-24 h-4" />
        </div>
      )}
    </div>
  );
};
