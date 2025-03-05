import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          600: "#ff3333",
          700: "#cc0000",
        },
      },
      fontFamily: {
        akira: ["Akira Expanded", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
