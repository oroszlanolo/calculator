/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': 'hsl(222, 26%, 31%)',
        'bg-toggle': 'hsl(223, 31%, 20%)',
        'bg-screen': 'hsl(224, 36%, 15%)',
        'bg-key-blue': 'hsl(225, 21%, 49%)',
        'shadow-key-blue': 'hsl(224, 28%, 35%)',
        'bg-key-red': 'hsl(6, 63%, 50%)',
        'shadow-key-red': 'hsl(6, 70%, 34%)',
        'bg-key-orange': 'hsl(30, 25%, 89%)',
        'shadow-key-orange': 'hsl(28, 16%, 65%)',
        'primary-blue': 'hsl(221, 14%, 31%)',
        'neutral-white': 'hsl(0, 0%, 100%)'
      },
      fontSize: {
        '3xl': '32px'
      },
      boxShadow: {
        'button': '0px 5px 0px 0px hsl(28, 16%, 65%)',
        'button-2': '0px 5px 0px 0px hsl(224, 28%, 35%)',
        'button-3': '0px 5px 0px 0px hsl(6, 70%, 34%)'
      }
    },
  },
  plugins: [],
}
