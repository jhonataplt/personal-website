/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#f4f4f6",
        background: "#171717",
        primary: "#676779",
        secondary: "#353535",
        accent: "#6464c5",
      },
    },
  },
  plugins: [],
};
