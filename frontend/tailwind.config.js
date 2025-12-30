/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
       colors: {
        heading: "#585858",
      },
       backgroundImage: {
        "green-grad":
          "linear-gradient(90deg, #009E51 0%, #5DB875 100%)",
      },
    },
  },
  plugins: [],
}