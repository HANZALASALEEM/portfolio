import type { Config } from "tailwindcss";
import textShadow from "tailwindcss-textshadow";

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
      boxShadow: {
        primary: "0 0 10px rgba(106, 53, 255, 1)", // shadow-primary
      },
      textShadow: {
        primary: "0 0 2px rgba(106,53,255,1)",
      },
    },
  },
  plugins: [textShadow],
} satisfies Config;
