/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
       primaryGold: "#B98E75",
       PrimaryDark: "#252531",
       SecondaryDark: "#343438",
       primaryGray: "#D5D2DA",
      },
      // fontFamily: {
      //   playfair: ['Playfair Display'],
      // },
    },
  },
plugins: [require("daisyui")],
}
