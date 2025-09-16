/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // 👈 CORRECT KEY & VALUE
  theme: {
    extend: {
      screens: {
        xs: "350px",
        ss: "540px",
      },
      fontFamily: {
        sans: ["dm sans", "calibri"],
        mono: ["ibm plex mono", "monospace"],
      },
      colors: {
        purple: "#7852ee",
        darkpurple: "#a882ff",
        black: "#121212",
        lightblack: "#1f1f1f",
        white: "#f5f5f5",
        lightwhite: "#fafafa",
      },
      boxShadow: {
        shadowbtn: "4px 4px 0 0 rgba(168,130, 255, 1)",
        "shadowbtn-light": "4px 4px 0 0 rgba(120, 82, 238, 1)",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        typing: " typing 3s steps(27) forwards ",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
