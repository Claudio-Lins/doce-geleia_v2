/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/slideImgs/img01.jpeg')",
        'contact': "url('/contact.jpeg')",
      },
      fontFamily: {
        Montserrat: 'Montserrat, sans',
        Old: 'Old Standard TT, sans-serif',
      },
      scale: {
        '-100': '-1',
    }
    },
  },
  plugins: [],
}
