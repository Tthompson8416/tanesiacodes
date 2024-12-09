/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#28282b', // Background color for sections
        'custom-light': '#f5f5f5', // Light background for cards
        'custom-accent': '#4caf50', // Accent color for headings and buttons
        'custom-border': '#d3d3d3', // Border color
        'custom-text': '#333333', // Primary text color
        'custom-subtext': '#666666', // Secondary text color
    },
  },
},
  
  plugins: [],
}
