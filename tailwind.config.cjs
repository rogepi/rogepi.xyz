/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.tsx",
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./ui/**/*.tsx"
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1440px",
        },
      }
    },
  },
  darkMode:"class",
  plugins: [],
}
