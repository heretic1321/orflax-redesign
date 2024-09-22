/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Protest Guerrilla', 'sans-serif'],
        'secondary': ['Arial', 'sans-serif'], // Replace with your secondary font
      },
      colors: {
        'primaryBlack': '#0D1B2A',
        'highlightYellow': '#FFC12C',
        'secondaryGray': '#CEE5F2',
        'primaryGray': '#1F2938',
      },
    },
    
  },
  plugins: [],
});

