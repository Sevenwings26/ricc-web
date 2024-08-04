/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "1xl": ["1rem"], //16px
        "2xl": ["1.125rem"], //18px
        "3xl": ["1.5rem"], //24px
        "small-xl": ["2rem"], //32px
        "small-2xl": ["2.25rem"], //36px
        "medium-xl": ["2.625rem"], //42px
        "medium-2xl": ["2.875rem"], //46px
        "medium-3xl": ["3rem"], //48px
        "big-xl": ["3.375rem"], //54px
        "big-2xl": ["3.5rem"], //56px
        "big-3xl": ["3.875rem"], //62px
        "large-xl": ["4.5rem"], //72px
        "large-2xl": ["4.75rem"], //76px
        "large-3xl": ["5.25rem"], //84px
        "huge-xl": ["5.75rem"], //92px
      },

      colors: {
        accent: "#FF9500",
        faded: "#FF95004D",
      },

      keyframes: {
        slideshow: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },

        fader: {
          from: { opacity: "1" },
          to: { opacity: "0.5" },
        },
      },

      animation: {
        slideshow: "slideshow 10s linear infinite",
        // fade: "fader s linear infinite",
      },
      backgroundImage: {
        hands: "url('../src/Assets/Images/fathertochild.png')",
        gather: "url('../src/Assets/Images/gather.png')",
      },
    },
  },
  plugins: [],
};
