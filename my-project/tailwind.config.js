const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#222831',
        highlightBackground: '#F3F4F6', // Example highlight background color
        highlightText: '#E5E7EB',        // Example highlight text color
        primary: '#F59E0B',              // Example primary color (e.g., for buttons)
        darkTeal: '#2D3748',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
