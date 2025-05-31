module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['"Cormorant Garamond"', 'serif'],
      sans: ['"Noto Sans"', 'sans'],
    },
  },
  plugins: [require("daisyui")],
};