/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "primary-donkey-brown": "#b98e75",
        "secondary-dark-gray": "#343438",
        "secondary-ash-gray": "#d5d2da",
        "primary-dark": "#252531",
        black: "#000",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "3xl": "1.38rem",
      base: "1rem",
      "29xl": "3rem",
      sm: "0.88rem",
      "41xl": "3.75rem",
      "9xl": "1.75rem",
      lg: "1.13rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
