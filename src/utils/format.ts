// Format numbers for display
export function formatNumber(num: string | number, digits = 2): string {
  const n = Number(num);
  if (isNaN(n)) return "-";
  if (n > 1000) return n.toLocaleString(undefined, { maximumFractionDigits: digits });
  return n.toFixed(digits);
}

// Format timestamp for display
export function formatTime(ts: number): string {
  return new Date(ts).toLocaleString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
