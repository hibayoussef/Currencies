import React from "react";

export const MarketListError = ({ error }: { error: string }) => (
  <div className="py-8 text-center text-red-500">{error}</div>
);