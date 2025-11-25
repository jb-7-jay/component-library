/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#0F1A38", // scale - 5
          dark: "#121d4e", // scale - 4
          darker: "#0c1232", // scale - 3
          light: "#2c3d78", // scale - 2
          lighter: "#F7F8F8", // scale - 1
        },
      },
    },
  },
  plugins: [],
};
