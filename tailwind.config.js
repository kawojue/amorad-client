/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      colors: {
        "primary": "#186784",
        "success": "#014847",
        "danger": "#EE5D50",
        "dark": "#1D2329",
        "secondary": "#F6FDFF",
        'blue': '#002836',
        'textColor': "#586283"
      },
      fontSize: {
        xs: '13px',
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
  ],
};
