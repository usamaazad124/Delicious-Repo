/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '663_': '663px',
      },
      width: {
        '85_': '85%',
      }
    },
  },
  plugins: [],
}