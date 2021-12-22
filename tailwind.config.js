module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend:{
      textColor:{
        "me":"green"
      },
      backgroundImage: {
        'red-pattern': "url(/components/assets/background.png)",
        'red-fill': "url(/components/assets/fixedbackground1.png)"
      }
    }
  },
  variants: {
    extend: {}
  },
};
