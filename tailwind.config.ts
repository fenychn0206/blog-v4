import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"LXGW WenKai Screen"', ...defaultTheme.fontFamily.serif],
        mono: ['"JetBrains Mono"', '"Noto Sans SC"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};

export default config;
