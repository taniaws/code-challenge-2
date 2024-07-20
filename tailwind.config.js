/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,tjx,tsx}", "./fake-server/**/*.{json}",],
  theme: {
    extend: {
      screens: {
        "sm": "320px",
        "md": "768px",
        "lg": "1024px",
      }
    },
  },
  safelist: [
    'bg-[#4ca735]',
    'bg-[#3d8a2d]',
    'bg-[#4eabd2]',
    'bg-[#4091af]',
    'bg-[#db3e40]',
    'bg-[#a13434]',
    'bg-[#88398a]',
    'bg-[#762e69]',
    'bg-[#8fca77]',
    'bg-[#8bd0e4]',
    'bg-[#e9848a]',
    'bg-[#ca8ec5]'
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

