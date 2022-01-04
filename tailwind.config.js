module.exports = {
  purge: { content: ["./src/**/*.tsx"] },
  darkMode: false, // or 'media' or 'class'

  theme: {
    fontFamily: {
      body: ["font-mono"],
    },
    extend: {
      screens: {
        sm: "330px",
        md: "768px",
        lg: "847px",
        xl: "1280px",
        "2xl": "1441px",
        "hover-hover": { raw: "(hover: hover)" },
      },
    },
  },
  //customize about hover, focus, active ...
  variants: {
    display: ["responsive", "group-hover"],
    extend: { backgroundColor: ["active"], opacity: ["disabled"] },
  },

  plugins: [require("@tailwindcss/forms")],
};
