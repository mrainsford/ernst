/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        base: '16px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        customGray: '#4D5354',
        customBlue: '#61a4d8',
      },
      maxWidth: {
        maxc0width: '1170px',
        maxc1width: '800px',
      },
      padding: {
        '12px': '12px',
        '25px': '25px',
      },
      zIndex: {
        1: '1',
      },
    },
  },
  plugins: [],
};
