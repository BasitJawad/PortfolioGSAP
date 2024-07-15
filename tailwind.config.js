/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
      'tecno': {'min':'360px', 'max':'959'}
    },
    extend: {
      screens: {
        // 'tecno': {'min':'360px', 'max':'959'},
        // => @media (min-width: 992px) { ... }
      },
    },

  },
  plugins: [],
}