/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        body: ['15px', '26px'],
        head: ['40px', '39px'],
        head2: ['32px'],
      },
      fontFamily: {
        body: ['Inter'],
      },
      colors: {
        primary: {
          softOrange: 'hsl(35, 77%, 62%)',
          softRed: 'hsl(5, 85%, 63%)',
        },
        neutral: {
          offWhite: 'hsl(36, 100%, 99%)',
          grayishBlue: 'hsl(233, 8%, 79%)',
          darkGrayishBlue: 'hsl(236, 13%, 42%)',
          veryDarkBlue: 'hsl(240, 100%, 5%)',
        },
      },
    },
  },
  plugins: [],
}
