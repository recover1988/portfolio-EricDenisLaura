/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#161616",
        color2: "#272f38",
        color3: "#b3b4bd",
        color4: "#f2f1fa",
        color5: "#ff0062",
      },
    },
    fontFamily: {
      display: ["Technos", "Hyperwave", "Raskhal", "Oswald"],
    },
  },
  plugins: [],
};
