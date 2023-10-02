/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#5CA5A5",
        lightGreen: "#EFF6F6",
        lightGrey: "#B7C4C4",
        darkGrey: "#7C8F8F",
        Black: "#2B3939",
      },
      backgroundImage: {
        "bg-header-desktop": "url('/src/assets/images/bg-header-desktop.svg')",
        "bg-header-mobile": "url('/src/assets/images/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
};
