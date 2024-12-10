/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#faf4eb', // Background color for sections
        'custom-light': '#f5f5f5', // Light background for cards
        'custom-accent': '#524748', // Accent color for headings and buttons
        'custom-border': '#524748', // Border color
        'custom-text': '#eadcc2', // Primary text color
        'custom-subtext': '#f3e1d8', // Secondary text color
        'custom-link': '#ffcc99',
        'custom-intro': '#15a9a9',
        'custom-intro-text': '#eadcc2',
    },
  },
},
  
  plugins: [],
}
