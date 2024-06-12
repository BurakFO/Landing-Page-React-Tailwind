/** @type {import('tailwindcss').Config} 
 */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0rem",
          sm: "3rem",
        }
      }
    },
    plugins: [],
  }
}
