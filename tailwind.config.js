/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        pink1: "#DE639A",
        peach: "#F7B2B7DE",
        peach1: "#F7B2B71C",
        purple: "#7F2982",
      },
      backgroundImage: {
        "cake-background-img": "url('/cake.jpeg')",
        "donut-img": "url('/donuts.jpeg')",
        "cupcakes-img": "url('/cupcakes.jpeg')",
        "divider-img": "url('/cc.png')",
      },
    },
  },
  plugins: [],
};
