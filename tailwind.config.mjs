/** @type {import('tailwindcss').Config} */

const baseFontSize = 10;

function calculateRem(pxValue, baseFontSize = 10) {
  return `${pxValue / baseFontSize}rem`;
}

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#5938E0',
        secondary: '#FF5700',
        tetriary: '#B9EFBB',
        background: '#FAF4F0',
      },
      fontFamily: {
        primary: ['Garnett', 'sans-serif'],
        secondary: ['Salted', 'sans-serif'],
      },
      fontSize: {
        h1: [
          calculateRem(40),
          {
            lineHeight: calculateRem(40),
          },
        ],
        h2: [
          calculateRem(40),
          {
            lineHeight: calculateRem(40),
          },
        ],
        h3: [
          calculateRem(16),
          {
            lineHeight: calculateRem(24),
          },
        ],
        h4: [
          calculateRem(30),
          {
            lineHeight: calculateRem(30),
          },
        ],
        body1: [
          calculateRem(24),
          {
            lineHeight: calculateRem(24 * 1.5),
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
        small: calculateRem(5),
        regular: calculateRem(25),
      },
      spacing: () => ({
        ...Array.from({ length: 96 }, (_, index) => index * 0.5)
          .filter(i => i)
          .reduce(
            (acc, i) => ({ ...acc, [i]: `${i / (baseFontSize / 4)}rem` }),
            {}
          ),
      }),
      zIndex: {
        negative: '-1',
      },
      boxShadow: {
        regular: '0 0 50px 0 rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        small: '87rem',
        regular: '132rem',
      },
      gridTemplateColumns: {
        small: 'repeat(auto-fill, minmax(33rem, 42rem))',
        regular: 'repeat(auto-fill, minmax(35rem, 1fr))',
      },
    },
  },
  plugins: [],
};
