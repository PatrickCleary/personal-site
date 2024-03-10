/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      "reg-sb": ["RegerexSemiBold"],
    },
    extend: {
      colors: {
        dark: "#0a0d11",
        light: "#c8d4e6",
      },
    },
  },
  plugins: [],
};
