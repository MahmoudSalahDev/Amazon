import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        mainYellow: "#FFD814",
        navBgColor: "#131921",
        navBgSecColor: "#232F3E",
        blueLinks: "#2A8FD7",
        cyan: "#1F8394",
      }
    },
    fontFamily: {
      'ibm': ['IBM Plex Sans Condensed', 'sans-serif'],
      'inika': ['Inika', 'serif'],
      'noto': ['Noto Serif Gujarati Variable', 'serif'],
      'lato': ['Lato', 'sans-serif'],
      'inter': ['Inter Variable', 'sans-serif'],
      'hind': ['Hind Vadodara', 'sans-serif'],
      'cabin': ['Cabin Condensed', 'sans-serif'],
    }
  },
  plugins: [daisyui],
}

