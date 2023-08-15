/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
      },
      width: {
        a4: '210mm',
      },
      height: {
        a4: '297mm',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
