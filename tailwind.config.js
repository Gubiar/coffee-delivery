/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "var(--purple)",
      "purple-light": "var(--purple-light)",
      "purple-dark": "var(--purple-dark)",

      yellow: "var(--yellow)",
      "yellow-dark": "var(--yellow-dark)",
      "yellow-light": "var(--yellow-light)",

      white: "var(--white)",
      "white-light": "var(--white-light)",

      "base-title": "var(--base-title)",
      "base-subtitle": "var(--base-subtitle)",
      "base-text": "var(--base-text)",
      "base-label": "var(--base-label)",
      "base-hover": "var(--base-hover)",

      "base-button": "var(--base-button)",
      "base-input": "var(--base-input)",
      "base-card": "var(--base-card)",

      coffee: "var(--coffee)",
      "coffee-light": "var(--coffee-light)",
    },
    fontFamily: {
      "baloo-2": "var(--baloo-2)",
      roboto: "var(--roboto)",
    },
    extend: {
      backgroundImage: {
        "hero-somber":
          "linear-gradient(to bottom, rgba(232, 211, 184, 0) 0%, rgba(232, 211, 184, 1) 100%), url('./assets/background.svg')",
      },
    },
  },
  plugins: [],
};
