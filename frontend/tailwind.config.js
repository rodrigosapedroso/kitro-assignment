/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FCFCFA",
        cream: {
          100: "#060605ff",
          200: "#F7F3E8",
          300: "#D3D1C9",
          400: "#ADAAA2",
          500: "#85837C",
        },
        coffee: {
          100: "#F3F3EF",
          200: "#E1E1D6",
          300: "#CECEC5",
          400: "#9E9E96",
          500: "#6E6E68",
        },
        gray: {
          100: "#F7F7F7",
          200: "#F2F2F2",
          300: "#DBDBDB",
          400: "#B9B8B8",
          500: "#7F7F7F",
        },
        orange: "#FFDDA7",
        red: {
          100: "#ED615F",
          200: "#E93A37",
        },
        green: {
          100: "#C6E6E3",
          200: "#507E6A",
        },
        black: "#323232",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
