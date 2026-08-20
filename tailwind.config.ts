import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070B18",
        foreground: "#ededed",
        brand: {
          blue: "#1C40F2",
          "blue-hover": "#1534c9",
          green: "#00E4B8",
          "green-hover": "#00c9a2",
          dark: "#070B18",
          purple: {
            950: "#0F0721",
            900: "#170A31",
            850: "#1D0C3C",
            800: "#240E48",
            700: "#36146D",
            600: "#4D1D9A",
            border: "rgba(147, 51, 234, 0.22)",
            "border-hover": "rgba(0, 228, 184, 0.4)",
          },
        },
      },
      fontFamily: {
        heading: ["var(--font-atemica)", "AtemicaSans", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
      },
      letterSpacing: {
        tight: "-0.02em",
        normal: "-0.01em",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
