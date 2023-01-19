/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'serif': ['Source Serif Pro', 'Georgia']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
