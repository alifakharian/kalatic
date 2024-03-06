/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    extend: {},
    screens:{
      'sm':'576px',
      'md':'768px',
      'lg':'992px',
      'xl':'1200px',
      '2xl':'1400px'
    },
   
    container: {
      center: true,
    },
  },
  plugins: [
    require('flowbite/plugin'),
    

  ],
}

