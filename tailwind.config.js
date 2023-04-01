/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      colors:{
        'primaryColor':'#0a192f',
        'secondaryColor':'#64ffda',
        'hoverTeal':'rgba(100,255,218,0.08)',
        'lightSlate':'#a8b2d1',
        'lightestSlate':'#ccd6f6',
        'darkSlate':'#8892b0',
        'mattBlack':'#060608',
        'lightNavy':'#112240'
      },
    fontFamily:{

    'display': ['Calibre',"Inter","San Francisco","SF Pro Text","-apple-system","system-ui","sans-serif"],
    'body': ['Calibre',"Inter","San Francisco","SF Pro Text","-apple-system","system-ui","sans-serif"],
    'calibre':[],
    'poppins': ['Consolas','Menlo','Monaco','Andale Mono','Ubuntu Mono','Courier New','monospace'],
    },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fade: 'fadeOut 1s ease-in-out',
        },
        keyframes: theme => ({
          fadeOut: {
            '0%': { backgroundColor: theme('colors.red.300') },
            '100%': { backgroundColor: theme('colors.transparent') },
          },
        }),
    },
  },
  plugins: [],
}
