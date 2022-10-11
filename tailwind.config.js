/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      fontWeight: ["responsive", "hover", "focus"],
      opacity: ["hover"],
      borderColor: ["hover", "focus"],
      margin: ["first", "last"],
      backgroundColor: ["odd", "even"],
      scale: ["hover", "active", "group-hover"],
      textColor: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px", 
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
