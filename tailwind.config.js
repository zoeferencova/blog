/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'serif': ['Source Serif Pro', 'Georgia'],
      'mono': ['Menlo', 'Inconsolata'],
    },
    fontSize: {
      'rtbase': '1.1rem',
      'rtsm': '0.92rem',
      'xs': '0.75rem',
      'sm': '0.8rem',
      'code': '0.9rem',
      'base': '1rem',
      'lg': '1.1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'codeblock': '0.85rem',
      'pgtitle': '2.5rem',
      'subtitle': '1.4rem',
      'posth4': '1.33rem',
      'blogtitle': '1.8rem'
    },

    extend: {
      // that is animation class
      animation: {
        fade: 'fadeIn 0.2s ease-in',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),

      lineHeight: {
        'rt': '1.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin')
  ],
}
