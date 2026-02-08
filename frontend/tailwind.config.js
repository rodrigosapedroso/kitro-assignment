/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kitro: {
          primary: "#ED615F",
          primaryDark: "#E93A37",
          accent: "#FFDDA7",

          background: "#FBF9F4",
          backgroundAlt: "#F7F3E8",
          surface: "#F3F3EF",
          surfaceAlt: "#E1E1D6",

          border: "#D3D1C9",
          borderLight: "#CECEC5",

          textPrimary: "#323232",
          textSecondary: "#6E6E68",
          textMuted: "#9E9E96",

          grayLight: "#F7F7F7",
          gray: "#DBDBDB",
          grayDark: "#7F7F7F",

          success: "#507E6A",
          successLight: "#C6e6e3",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
