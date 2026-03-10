export interface MarketToolbarSelectOption {
  value: string;
  label: React.ReactNode;
}

export interface MarketToolbarSelectProps {
  value: string;
  onChange: (v: string) => void;
  options: MarketToolbarSelectOption[];
  icon?: React.ReactNode;
  className?: string;
}
