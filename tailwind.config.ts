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
        background: "#141414", // #222222
        primary: "#6A35FF", // #9748fd
        secondary: "#292929", // #2c2c2c
      },
      fontFamily: {},
    },
  },
  plugins: [],
} satisfies Config;
