/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MountainsOfChristmas: ["Mountains of Christmas", "sans-serif"],
        DynaPuff: ["DynaPuff","sans-serif"],
      },
      colors: {
        stiletto: "#962c33",
        gray: "#c4c4d0",
        akaroa: "#dabfaa",
        donJuan: "#594f4d",
        plantation: "#223d47",
        loblolly: "#bc32c8",
        baliHai: "#759ab0",
        grany: "#7e9d9a",
      },
    },
  },
  plugins: [],
};