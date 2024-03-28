/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray_body: "#F3F3F3",
      },
    },
    fontFamily: {
      'league-spartan': ['League Spartan', 'sans-serif'],
      'glacial-indifference': ['Glacial Indifference', 'sans-serif']
    },    
  },
  plugins: [],
};
