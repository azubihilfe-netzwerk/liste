/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // Alle JS/TS und React Dateien im src Ordner
  ],
  theme: {
    extend: {
      colors: {
        'navbar-blue': '#1a5d5d',

      }
    },
  },
  plugins: [],
}

