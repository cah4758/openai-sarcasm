module.exports = {
  content: ["src/index.html"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
