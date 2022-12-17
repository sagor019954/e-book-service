/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {

    theme: ["winter"],
  },

  plugins: [require("daisyui")],

}
