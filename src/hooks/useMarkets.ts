import type { Market } from "@/types/market-list";
import { useEffect, useState } from "react";

/**
 * Custom hook to fetch and manage market data.
 */
export function useMarkets() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMarkets() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://api.binance.com/api/v3/ticker/24hr");
        const data = await res.json();
        // Filter for USDT pairs only, take top 20 by volume
        type BinanceTicker = {
          symbol: string;
          lastPrice: string;
          priceChangePercent: string;
        };
        const filtered = (data as BinanceTicker[])
          .filter((item) => item.symbol.endsWith("USDT"))
          .slice(0, 20)
          .map((item) => ({
            symbol: item.symbol,
            baseAsset: item.symbol.replace("USDT", ""),
            quoteAsset: "USDT",
            price: item.lastPrice,
            priceChangePercent: item.priceChangePercent,
          }));
        setMarkets(filtered);
      } catch (e) {
        setError("Failed to load markets");
      } finally {
        setLoading(false);
      }
    }
    fetchMarkets();
  }, []);

  return { markets, loading, error };
}
