/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // 🔒 Desactiva modo oscuro global
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D8A353",
        accent: "#00BFFF",
      },
    },
  },
  plugins: [],
};
