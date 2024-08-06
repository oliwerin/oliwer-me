/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      black: "rgb(57, 62, 70)",
      white: "rgb(247, 247, 247)",
      "accent-1": "rgb(238, 238, 238)",
      "accent-2": "rgb(146, 154, 171)",
    },
    fontFamily: {
      sans: ["Karla", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  darkMode: ["selector", "html.dark"],
  plugins: [],
};
