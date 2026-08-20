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
        background: "#05070B",
        foreground: "#ededed",
        brand: {
          blue: "#1C40F2",
          "blue-hover": "#1534c9",
          green: "#00E4B8",
          "green-hover": "#00c9a2",
          dark: "#05070B",
          slate: {
            950: "#05070B",
            900: "#090B10",
            850: "#0D0F16",
            800: "#12151E",
            700: "#181C28",
            600: "#222738",
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
