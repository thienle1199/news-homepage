/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "almost-white": "rgba(255, 253, 250, 1)",
        "dark-space-blue": "rgba(0, 0, 26, 1)",
        gunmetal: "rgba(94, 96, 122, 1)",
        "light--vermillion": "rgba(241, 93, 81, 1)",
        silver: "rgba(197, 198, 206, 1)",
        yellow: "rgba(233, 170, 82, 1)",
        "divider-color": "hsla(236, 13%, 42%, 1)",
      },
      fontSize: {
        "heading-x-l": "56px",
        "heading-l": "40px",
        "heading-m": "32px",
        "heading-s": "20px",
        "heading-xs": "18px",
        body: "15px",
      },
    },
  },
  plugins: [],
};
