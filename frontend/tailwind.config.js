/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        200: "hsl(var(--color-primary--lightest) / 1)",
        300: "hsl(var(--color-primary--lighter) / 1)",
        400: "hsl(var(--color-primary--light) / 1)",
        500: "hsl(var(--color-primary) / 1)",
        600: "hsl(var(--color-primary--dark) / 1)",
        700: "hsl(var(--color-primary--darker) / 1)",
        800: "hsl(var(--color-primary--darkest) / 1)",
      },
      secondary: {
        200: "hsl(var(--color-secondary--lightest) / 1)",
        300: "hsl(var(--color-secondary--lighter) / 1)",
        400: "hsl(var(--color-secondary--light) / 1)",
        500: "hsl(var(--color-secondary) / 1)",
        600: "hsl(var(--color-secondary--dark) / 1)",
        700: "hsl(var(--color-secondary--darker) / 1)",
        800: "hsl(var(--color-secondary--darkest) / 1)",
      },
      "accent-1": "hsl(var(--color-accent-1) / 1)",
      "accent-2": "hsl(var(--color-accent-2) / 1)",
      "accent-3": "hsl(var(--color-accent-3) / 1)",
      "accent-4": "hsl(var(--color-accent-4) / 1)",
      "accent-5": "hsl(var(--color-accent-5) / 1)",
      "accent-6": "hsl(var(--color-accent-6) / 1)",
      white: "hsl(var(--color-white) / 1)",
      black: colors.black,
      gray: colors.slate,

    },
  },
  plugins: [],
};
