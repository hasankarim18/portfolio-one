/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paste: "#00A3E1",
        matBlack: "#2A2B30",
        textBlack: '#222',
        textLight: '#555'
      },
    },
  },
  plugins: [require("daisyui")],
};

