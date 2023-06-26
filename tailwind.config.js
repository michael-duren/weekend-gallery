/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Monoton', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["garden"]
  }
}