
"use client";
import { useMarkets } from "@/hooks/useMarkets";
import { MarketList } from "@/components/market/MarketList";
import { MarketToolbar } from "@/components/market/MarketToolbar";
import { useRouter } from "next/navigation";
import { useFavorites } from "@/hooks/useFavorites";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { filterAndSortMarkets } from "@/utils/filterAndSortMarkets";
import { useState } from "react";

export default function Home() {
  const { markets, loading, error } = useMarkets();
  const { favorites, toggleFavorite } = useFavorites();
  const { recent, addRecent } = useRecentlyViewed();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"favorites" | "alpha" | "price" | "change">("favorites");
  const router = useRouter();
  const handleSelect = (symbol: string) => {
    addRecent(symbol);
    router.push(`/market/${symbol}`);
  };
  const filteredMarkets = filterAndSortMarkets(markets, search, favorites, sort);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-16 px-4 bg-white dark:bg-black">
        <h1 className="mb-8 text-5xl font-extrabold text-center bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          <span>🚀 Currencies Dashboard</span>
        </h1>
        <MarketToolbar search={search} setSearch={setSearch} sort={sort} setSort={setSort} />
        <MarketList
          markets={filteredMarkets}
          loading={loading}
          error={error}
          onSelect={handleSelect}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
        {recent.length > 0 && (
          <div className="w-full mt-10">
            <h2 className="text-lg font-semibold mb-2">Recently Viewed</h2>
            <div className="flex flex-wrap gap-2">
              {recent.map((symbol) => (
                <button
                  key={symbol}
                  className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-sm font-mono"
                  onClick={() => handleSelect(symbol)}
                >
                  {symbol}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
