/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url(./assets/img/hrc.png)',
        'heroSm': 'url(./assets/img/bgsm.png)',
        'company': 'url(./assets/img/planet.jpg)',
        'banner': 'url(./assets/img/imgx.jpg)',
        'services': 'url(./assets/img/uni.jpg)',
        'client': 'url(./assets/img/lines.png)',
        'haush': 'url(./assets/img/haush.png)',
        'astronauta': 'url(./assets/img/astrona.png)',
        'card1': 'url(./assets/img/diseño.avif)',
        'card2': 'url(./assets/img/app.avif)',
        'card3': 'url(./assets/img/sistema.jpg)',
        'contact': 'url(./assets/img/2.png)',
        'contact1': 'url(./assets/img/fndx.png)'
      },

      boxShadow: {
        neon: "0 0 5px theme('colors.purple.500'), 0 0 20px theme('colors.purple.700')",
        verde: "0 0 5px theme('colors.lime.200'), 0 0 20px theme('colors.lime.500')",
        naranja: "0 0 5px theme('colors.yellow.200'), 0 0 20px theme('colors.yellow.500')",
      }
    },
    screens: {
      xxxl: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xxl: { max: "1300px" },
      // => @media (max-width: 1300px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }
  
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "375px" },
      // => @media (max-width: 479px) { ... }
    },

  },
  plugins: [

  ],
}