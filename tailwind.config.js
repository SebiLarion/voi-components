module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2A3D50",
        "soft-pink": "#F7EFED",
        "dusty-pink": "#AFA4A7",
        "dark-gray": "#505050",
        "white-pink": "#F6F6F6",
        "dark-red": "#BD7F80",
        "light-pink": "#F6EFEC",
        "light-gray": "#C4C4C4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
