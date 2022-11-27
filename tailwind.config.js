/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        LoginNavbarBtn: "#00C1CA",
        LoginContainer: "#27262C",
        LoginCard: "#2D2D32",
      },
      colors: {
        textGray: "#999999",
        buttonBorder: "#00C1CA",
        cardText: "#737373",
      },
    },
  },
  plugins: [],
};
