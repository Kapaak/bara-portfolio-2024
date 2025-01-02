/** @type {import('tailwindcss').Config} */

const baseFontSize = 10;

function calculateRem(pxValue, baseFontSize = 10) {
  return `${pxValue / baseFontSize}rem`;
}

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#5938E0",
        secondary: "#FF5700",
        tetriary: "#B9EFBB",
        background: "#F4EBE4",
      },
      fontSize: {
        h1: [
          calculateRem(64),
          {
            lineHeight: calculateRem(64),
          },
        ],
        h2: [
          calculateRem(40),
          {
            lineHeight: calculateRem(40),
          },
        ],
        h3: [
          calculateRem(24),
          {
            lineHeight: calculateRem(24),
          },
        ],
        body2: [
          calculateRem(16),
          {
            lineHeight: calculateRem(16),
          },
        ],
        body3: [
          calculateRem(14),
          {
            lineHeight: calculateRem(20),
          },
        ],
      },
      borderRadius: {
        regular: calculateRem(25),
      },
      spacing: () => ({
        ...Array.from({ length: 96 }, (_, index) => index * 0.5)
          .filter((i) => i)
          .reduce(
            (acc, i) => ({ ...acc, [i]: `${i / (baseFontSize / 4)}rem` }),
            {}
          ),
      }),
      zIndex: {
        negative: "-1",
      },
      maxWidth: {
        regular: "132rem",
      },
    },
  },
  plugins: [],
};
