/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primaryColor':'#0a192f',
        'secondaryColor':'#64ffda',
        'hoverTeal':'rgba(100,255,218,0.08)',
        'lightSlate':'#ccd6f6',
        'darkSlate':'#8892b0',
        'lightNavy':'#112240'
      }
    },
  },
  plugins: [],
}
