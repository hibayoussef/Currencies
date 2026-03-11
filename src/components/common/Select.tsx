
// Generic select for toolbar
import type { MarketToolbarSelectProps } from "@/types/ui";

export const Select = ({ value, onChange, options, icon, className = "" }: MarketToolbarSelectProps) => (
  <div className={`flex items-center bg-white dark:bg-zinc-900 rounded-xl shadow px-3 py-2 ${className}`}>
    {icon && <span className="mr-2 text-purple-500 text-xl">{icon}</span>}
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-transparent border-none focus:outline-none text-lg font-semibold"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);
