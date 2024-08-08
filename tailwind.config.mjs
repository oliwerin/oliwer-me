const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: "1px 1px 2px transparent",
        dark: "1px 1px 2px rgb(57, 62, 70)",
      },
      rotate: {
        315: "315deg",
      },
    },
    /* https://colorhunt.co/palette/f7f7f7eeeeee393e46929aab */
    colors: {
      black: "rgb(57, 62, 70)",
      white: "rgb(247, 247, 247)",
      "accent-1": "rgb(238, 238, 238)",
      "accent-2": "rgb(146, 154, 171)",

      // Alternative palette:
      // https://colorhunt.co/palette/eeedebe0ccbe7472643c3633
      //
      // black: "rgb(60, 54, 51)",
      // white: "rgb(238, 237, 235)",
      // "accent-1": "rgb(238, 237, 235)",
      // "accent-2": "rgb(224, 204, 190)",
    },

    fontFamily: {
      sans: ["Karla", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  darkMode: ["selector", "html.dark"],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
