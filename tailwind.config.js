/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: 'regular',
        bold: 'bold',
      },
      keyframes: {
        carosale: {
          '0%': { transform: "translateX(0)" },
          '100%': { transform: "translateX(-100%)" },
        },
      },
      animation: {
        'carosale': 'carosale 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
