/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      
      colors: {
        'guardiao-azul': '#007AFF', 
        'guardiao-cinza-claro': '#F1F5F9', 
        'guardiao-branco': '#FFFFFF',
        
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], 
        'body': ['Quicksand', 'sans-serif'], 
      }
    },
  },
  plugins: [],
};