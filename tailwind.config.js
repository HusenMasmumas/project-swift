/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // NotoSansThai: ["NotoSansThai", "sans-serif"],
        // NotoSansThaiBold: ["NotoSansThaiBold", "sans-serif"],
        // NotoSansThaiMedium: ["NotoSansThaiMedium"],
      },
      dropShadow: {
        // profile: ["0px 0px 1px  #dadcdf", "1px 0px 2px  #dadcdf"],
      },
      colors: {
        // textBlack: "#141414",
      },
      fontSize: {
        // auto: "calc(50% + 0.8vmin)",
      },
    },
  },
  plugins: [],
};
