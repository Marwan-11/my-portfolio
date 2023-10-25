/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-black': '#191923',
        'box-gray': '#191923',
        'side-gray': 'rgba(37, 37, 50)',
        'icon-gray': '#8c8c8e',
        'main-gray': '#212529',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        auto: 'repeat(auto-fill, minmax(450px, 1fr))',
      },
    },
  },
  plugins: [],
};
