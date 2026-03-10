// Theme constants
export const THEME_LIGHT = "light" as const;
export const THEME_DARK = "dark" as const;
export type Theme = typeof THEME_LIGHT | typeof THEME_DARK;
