/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,tjx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm": "360px",
        "md": "481px",
        "lg": "769px"
      }
    },
  },
  plugins: [],
}

