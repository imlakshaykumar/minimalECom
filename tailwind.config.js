/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        blur: "rgba(0, 0, 0, .3)",
        hover: "rgba(0, 0, 0, .5)",
      }
    },
  },
  plugins: [],
};
