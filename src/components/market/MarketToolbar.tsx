

import type { MarketToolbarProps, SortType } from "@/types/market";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import type { MarketToolbarSelectOption } from "@/types/ui";
export const MarketToolbar = ({ search, setSearch, sort, setSort }: MarketToolbarProps) => (
  <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full items-center justify-between bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-xl shadow-lg">
    <Input
      value={search}
      onChange={setSearch}
      placeholder="Search by symbol..."
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      }
    />
    <Select
      value={sort}
      onChange={(v: string) => setSort(v as SortType)}
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      }
      options={[
        { value: "favorites", label: "Favorites first" },
        { value: "alpha", label: "Alphabetical" },
        { value: "price", label: "Highest price" },
        { value: "change", label: "Highest 24h change" },
      ] as MarketToolbarSelectOption[]}
    />
  </div>
);
