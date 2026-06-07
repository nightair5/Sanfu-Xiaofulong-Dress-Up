import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        candy: "#ff7fbd",
        skysoft: "#87d6ff",
        lilac: "#b99cff",
        cream: "#fff7ed"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(255, 127, 189, 0.25)",
        glass: "0 18px 60px rgba(64, 89, 132, 0.14)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
