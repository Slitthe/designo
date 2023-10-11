/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-dark": "#E7816B",
      "primary-faded": "#FFAD9B",
      "primary-light": "#FDF3F0",
      dark: "#1d1c1e",
      "dark-faded": "#333136",
      light: "#fff",
      lightHalfTransparent: "rgb(255, 255, 255, 0.5)",
      "light-faded": "#f1f3f5",
      black: "#000",
      transparent: "transparent",
    },

    extend: {
      margin: {
        small: "24px",
        standard: "40px",
      },
      padding: {
        small: "24px",
        standard: "40px",
      },
      screens: {
        md: "768px",
      },

      gridTemplateColumns: {
        infoCard: "auto auto",
      },
      borderRadius: {
        standard: "15px",
      },
      gap: {
        standard: "24px",
        large: "40px",
      },
    },
  },

  plugins: [],
};
