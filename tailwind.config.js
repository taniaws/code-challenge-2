/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,tjx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm": "320px",
        "md": "768px",
        "lg": "1024px",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

