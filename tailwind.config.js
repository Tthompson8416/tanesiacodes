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
        'custom-light': '#eadcc2', // Light background for cards
        'custom-accent': '#15a9a9', // Accent color for headings and buttons
        'custom-border': '#b6e2d3', 
        'custom-gh': '#555555', // Intro / footer text color
        'custom-subtext': '#7e481c', 
        'custom-intro-bg': '#15a9a9',
        'custom-intro-text': '#eadcc2',
        'custom-gradient': '#fae5ad',
    },
  },
},
  
  plugins: [],
}

