import React from "react";

/**
 * Skeleton component: shows loading placeholder with animation.
 */
export const Skeleton: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`animate-pulse bg-zinc-200 dark:bg-zinc-700 rounded ${className}`} />
);
