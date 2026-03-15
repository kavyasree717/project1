// src/tokens/tokens.ts
export const tokens = {
  colors: {
    // Light mode
    bg: '#ffffff',           // very light gray-blue
    surface: '#ffffff',
    textPrimary: '#0f172a',   // slate-900
    textSecondary: '#475569', // slate-600
    border: '#e2e8f0',        // slate-200
    accent: '#22c55e',        // green-500 — matches the video
    accentDark: '#15803d',    // green-700
    accentLight: '#0f5205',   // green-300
    warning: '#f59e0b',
    error: '#ef4444',
    primaryGreen: '#22c55e',
    primaryGreenDark: '#15803d',
    accentBright: '#c5d62c',
    primaryPurple: '#1b0969',
    darkBg: '#0a0e16',
    darkSurface: '#10161e',
    darkCard: '#101621',
    darkBorder: '#11161c',
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  radius: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
  },
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
} as const;