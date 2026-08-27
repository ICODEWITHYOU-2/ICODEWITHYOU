import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1E3A5F",
        "navy-soft": "#2C4E77",
        "navy-deep": "#152B47",
        sky: "#9FC5E0",
        "sky-mid": "#BDD8EC",
        "sky-light": "#DCEAF5",
        "sky-wash": "#EFF6FB",
        paper: "#F7F7F5",
        ink: "#33383D",
        "ink-soft": "#5B6470",
        gold: "#F2B441",
        silver: "#C4CDD5",
        bronze: "#D3A17B",
      },
      fontFamily: {
        heading: ["var(--font-nunito)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        navy: "0 20px 45px -20px rgba(30, 58, 95, 0.35)",
        "navy-sm": "0 8px 24px -12px rgba(30, 58, 95, 0.28)",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(6px, -10px)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 46s linear infinite",
        bob: "bob 5.5s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
