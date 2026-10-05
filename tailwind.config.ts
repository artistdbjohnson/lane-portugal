import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#002844",
        greige: "#B4ADA3",
        taupe: "#857B6C",
        paper: "var(--paper)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        brass: "#9A7B4F",
        field: "#0B1620",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "84rem",
      },
    },
  },
  plugins: [],
};

export default config;
