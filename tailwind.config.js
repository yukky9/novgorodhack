/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'yellow': 'var(--yellow)',
        'light-yellow': 'var(--light-yellow)',
        'light-body': 'var(--light-body)',
        'light-grey': 'var(--light-grey)',
        'blue': 'var(--blue)',
        'dark-blue': 'var(--dark-blue)',
        'dark-gold': 'var(--dark-gold)',
        'grey': 'var(--grey)'
      }
    },
  },
  plugins: [],
}

