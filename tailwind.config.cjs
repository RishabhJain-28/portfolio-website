/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { lg: "1100px" },
    // screens: { lg: "1450px" },

    extend: {
      animation: {
        fade: "fadeOut 10s ease-in-out infinite",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: "100%" },
          "25%": { opacity: "0%" },
          "50%": { opacity: "100%" },
          "75%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      }),
    },
  },
  plugins: [],
};
