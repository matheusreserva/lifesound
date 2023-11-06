/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient":
          "linear-gradient(91deg, #6F44D8 0.73%, #0096EB 99.35%);",
      },
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: ['StretchPro', 'sans-serif'],

      },
      colors: {
        primary: '#F3F3F3',
        secondary: '#6F44D8',
        terciary: '#00EB42',
        quarter: '#191919',  
             
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
