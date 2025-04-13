// tailwind.config.js in test-nativewind
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ensure this line points correctly to your App file
  content: ["./App.{js,jsx,ts,tsx}"],
  // Ensure the preset is loaded
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};