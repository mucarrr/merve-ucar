/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Primary warm brand (refined amber/orange)
        brand: {
          light: "#fbbf24", // amber-400
          DEFAULT: "#f59e0b", // amber-500
          dark: "#d97706", // amber-600
        },
        ember: {
          DEFAULT: "#ea580c", // orange-600
          dark: "#c2410c", // orange-700
        },
        // Complementary secondary accent (used for "live" / secondary actions)
        accent: {
          light: "#2dd4bf", // teal-400
          DEFAULT: "#14b8a6", // teal-500
          dark: "#0d9488", // teal-600
        },
        // Surfaces driven by CSS variables (see globals.css)
        surface: {
          DEFAULT: "var(--surface)",
          alt: "var(--surface-alt)",
          card: "var(--surface-card)",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)",
        "accent-gradient": "linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)",
      },
    },
  },
  plugins: [],
};
