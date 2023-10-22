import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0a192f",
        secondaryColor: "#64ffda",
        hoverTeal: "rgba(100,255,218,0.08)",
        lightSlate: "#a8b2d1",
        lightestSlate: "#ccd6f6",
        darkSlate: "#8892b0",
        mattBlack: "#060608",
        lightNavy: "#112240",
      },
      fontFamily: {
        display: [
          "Calibre",
          "Inter",
          "San Francisco",
          "SF Pro Text",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "Calibre",
          "Inter",
          "San Francisco",
          "SF Pro Text",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
        calibre: [],
        poppins: [
          "Consolas",
          "Menlo",
          "Monaco",
          "Andale Mono",
          "Ubuntu Mono",
          "Courier New",
          "monospace",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        fade: "fadeOut 1s ease-in-out",
      },

    },
  },
  plugins: [],
};
export default config;
