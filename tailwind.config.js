/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      iPhone5: '320px',
      // => @media (min-width: 320px) { ... }
      iPhone12: '360px',
      // => @media (min-width: 360px) { ... }
      iPhoneX: '375px',
      // => @media (min-width: 375px) { ... }
      iPhoneXR: '410px',
      // => @media (min-width: 410px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        hero: "url('/slideImgs/img01.jpeg')",
        contact: "url('/contact.jpeg')",
      },
      fontFamily: {
        Montserrat: 'Montserrat, sans-serif',
        Old: 'Old Standard TT, sans-serif',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
