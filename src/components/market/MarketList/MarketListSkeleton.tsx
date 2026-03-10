import { Skeleton } from "@/components/common/Skeleton";

export const MarketListSkeleton = () => (
  <ul className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-2xl shadow-xl grid gap-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <li key={i} className="flex items-center justify-between bg-white dark:bg-zinc-900 rounded-xl shadow-md px-6 py-4 animate-pulse">
        <div className="flex-1">
          <Skeleton className="w-24 h-5 mb-1" />
          <Skeleton className="w-16 h-3" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="w-16 h-6" />
          <Skeleton className="w-10 h-5" />
          <Skeleton className="w-6 h-6 rounded-full" />
        </div>
      </li>
    ))}
  </ul>
);