/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        Poppin: ["Poppins"],
      },
      colors: {
        timberwolf: {
          50: "#f7f7f5",
          100: "#edede7",
          200: "#d7d7cb",
          300: "#c2c2af",
          400: "#a8a68f",
          500: "#979378",
          600: "#8a846c",
          700: "#736d5b",
          800: "#5f594d",
          900: "#4e4b40",
          950: "#292721",
        },
        porsche: {
          50: "#fdf9ef",
          100: "#faf0da",
          200: "#f3deb5",
          300: "#ebc886",
          400: "#e6b36b",
          500: "#dc8f33",
          600: "#cd7729",
          700: "#aa5d24",
          800: "#884b24",
          900: "#6e3f20",
          950: "#3b1e0f",
        },
        black: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#313131",
          950: "#000000",
        },
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
