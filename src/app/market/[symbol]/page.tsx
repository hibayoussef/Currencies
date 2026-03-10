import { MarketDetails } from "@/components/market/MarketDetails";
import type { MarketPageProps } from "@/types/market-page";

async function checkSymbolExists(symbol: string): Promise<boolean> {
  try {
    const res = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
    if (!res.ok) return false;
    const data = await res.json();
    return !!data.price;
  } catch {
    return false;
  }
}

export default async function MarketPage({ params }: MarketPageProps) {
  const symbol = params.symbol?.toUpperCase();
  if (!symbol) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-zinc-50 dark:bg-black">
        <div className="mt-20 text-center text-red-600 text-xl font-bold">رمز العملة غير موجود أو غير صحيح</div>
      </div>
    );
  }
  const exists = await checkSymbolExists(symbol);
  if (!exists) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-zinc-50 dark:bg-black">
        <div className="mt-20 text-center text-red-600 text-xl font-bold">رمز العملة غير موجود أو غير صحيح</div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-50 dark:bg-black">
      <MarketDetails symbol={symbol} />
    </div>
  );
}
