/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "rgb(245,245,245)",
          gray: "rgb(103,104,105)",
          blue: "rgb(1,0,91)",
          "purple-gray": "rgb(240,238,239)",
          "light-cream": "rgb(249,240,230)",
          "dark-blue": "rgb(21, 0, 91)",
          green: "rgb(31, 173, 64)",
        },
        secondary: {
          black: "rgb(0,0,0)",
          gray: "rgb(108,108,108)",
          blue: "rgb(42,41,150)",
          white: "rgb(255, 255, 255)",
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgb(249, 240, 229), rgba(249, 240, 229, 0.18) 43.048%, rgba(249, 240, 229, 0) 100%)",
        "custom-gradient-2":
          "linear-gradient(180.00deg, rgba(249, 240, 229, 0.7),rgba(249, 240, 229, 0.22) 100%)",
        "custom-gradient-3":
          "linear-gradient(360.00deg, rgb(249, 240, 229) 0%,rgba(249, 240, 229, 0.18) 43.049%,rgba(249, 240, 229, 0) 100%);",
      },
      boxShadow: {
        custom: "0px 3px 10px 1px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
