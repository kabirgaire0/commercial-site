/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set the font family for the whole website
        'custom': ['Comic Neue', 'sans-serif'],
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}