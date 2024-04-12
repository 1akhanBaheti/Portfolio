import { Raleway } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Trap Black"', "sans-serif"],
        paragraph: ["Inter", "Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        custom: {
          "primary-100": "var(--primary-100)",
          "primary-200": "var(--primary-200)",
          "background-100": "var(--background-100)",
          "text-100": "var(--text-100)",
          "text-200": "var(--text-200)",
          "text-300": "var(--text-300)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
