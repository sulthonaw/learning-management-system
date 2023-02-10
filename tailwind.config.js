/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
      container: {
        center: true,
        padding: {
          sm: "2.5rem"
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
