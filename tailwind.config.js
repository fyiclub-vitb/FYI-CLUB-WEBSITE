/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    // These tokens provide the shared colors, typefaces, shadows, and motion utilities.
    extend: {
      colors: {
        "surface": "#F6F3EB",
        "surface-dim": "#EBE7DC",
        "surface-card": "#FFFFFF",
        "primary": "#111111",
        "brand-orange": "#FF4800",
        "brand-cyan": "#00E5FF",
        "brand-yellow": "#FFE600",
        "brand-muted": "#6E6C65",
      },
      fontFamily: {
        "headline": ["Syne", "sans-serif"],
        "body": ["Hanken Grotesk", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
        "hand": ["Caveat", "cursive"],
      },
      boxShadow: {
        "brutal-sm": "3px 3px 0px #111111",
        "brutal": "4px 4px 0px #111111",
        "brutal-md": "6px 6px 0px #111111",
        "brutal-lg": "8px 8px 0px #111111",
        "brutal-orange": "6px 6px 0px #FF4800",
        "brutal-cyan": "6px 6px 0px #00E5FF",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "marquee": "marquee 24s linear infinite",
        "spin-slow": "spin-slow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

