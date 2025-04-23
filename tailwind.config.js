export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "class";
export const theme = {
  screens: {
    sm: "500px", // Small screens start at 500px
    md: "750px", // Medium screens start at 750px
    lg: "1024px", // Large screens start at 1024px
    xl: "1280px", // Extra-large screens start at 1280px
  },
  extend: {
    colors: {
      brandOrange: "#E16C00",
      primaryGreen: "#2DC071",
      customBlue: "#266AD5",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
};
export const plugins = [];
