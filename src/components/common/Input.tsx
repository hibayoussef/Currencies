// Generic input for toolbar
import type { InputProps } from "@/types/input";

export const Input = ({ value, onChange, placeholder = "", icon, className = "" }: InputProps) => (
  <div className={`flex items-center w-full sm:w-64 bg-white dark:bg-zinc-900 rounded-xl shadow px-3 py-2 ${className}`}>
    {icon && <span className="mr-2 text-blue-500 text-xl">{icon}</span>}
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent border-none focus:outline-none text-lg font-semibold"
    />
  </div>
);
