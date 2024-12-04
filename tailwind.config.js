/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(101.61deg, #083F9B 0%, #7F56D9 93.39%)',
      },
    },
  },
  plugins: [],
}

