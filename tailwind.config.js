/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px',
        'sm': '576px',    // Small screens
        'md': '768px',    // Medium screens
        'lg': '1030px',    // Large screens
        'xl': '1200px',   // Extra large screens
        '2xl': '1440px',  // Double extra large screens
        // Add more custom screen sizes as needed
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        "contactMe": "url('https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }
    }
  },
  plugins: [],
}