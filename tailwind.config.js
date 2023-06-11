/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#FF2822",
        },
        green: {
          DEFAULT: "#66FF2E",
        },
        blue: {
          DEFAULT: "#14FFEB",
        },
      },
    },
  },
  plugins: [],
};
