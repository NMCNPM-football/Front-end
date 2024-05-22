/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        primaryHover: "#0069d9",
        secondaryHover: "#5a6268",
      },
    },
  },
  plugins: [],
};
