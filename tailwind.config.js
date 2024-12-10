/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#fefcff', // Background color for sections
        'custom-light': '#f5f5f5', // Light background for cards
        'custom-accent': '#34282c', // Accent color for headings and buttons
        'custom-border': '#34282c', // Border color
        'custom-text': '#4caf50', // Primary text color
        'custom-subtext': '#b86500', // Secondary text color
        'custom-link': '#ffcc99',
        'custom-intro': '#ffcc99',
        'custom-intro-text': '#34282c',
    },
  },
},
  
  plugins: [],
}
