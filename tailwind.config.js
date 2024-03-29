/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // puntos de interruccion tamaño de pantalla
      "xs": { max: "439px" }, // móvil
      "sm": { max: "640px", min: "440px" }, // móvil
      "md": { min: "641px", max: "768px" }, // tablet
      "lg": { min: "769px", max: "1024px" }, // laptop
      "xl": { min: "1025px", max: "1280px" }, // desktop
      "2xl": { min: "1281px" }, // desktop
    },
    extend: {
      colors: {
        gray_body: "#F3F3F3",
        yelow_body: "#FBD116",
      },
    },
    fontFamily: {
      "league-spartan": ["League Spartan", "sans-serif"],
      "glacial-indifference": ["Glacial Indifference", "sans-serif"],
    },
  },
  plugins: [],
};
