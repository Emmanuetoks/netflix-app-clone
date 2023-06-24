/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding: {
        '15': '60px'
      },
      colors: {
        n_primary: "#e50914",
        n_dark_gray: "#6D6D6E",
        n_light_gray: {
          base: "#E5E5E5",
          hover: "#b3b3b3"
        },
        n_black: "#141414"
      }
    }
  },
  plugins: [],
}
