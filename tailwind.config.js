/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        red: "#af0e2e",
        darkRed: "#640215",
        borderGray: "#1d1b1c",
      },
      fontFamily: {
        comfortaa: ["var(--font-comfortaa)"],
        cormorant_garamond: ["var(--font-cormorant-garamond)"],
        helvetica_neue: ["var(--font-helvetica-neue)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
