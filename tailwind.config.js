const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"), new HtmlWebpackPlugin()],
  daisyui: {
    logs: false,
  },
};
