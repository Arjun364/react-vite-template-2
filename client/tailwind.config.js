const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  // darkmode on the based on the system
  darkMode: 'class',
  // tailwind visibilty
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // flowbite
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  // screen divide
  screens: {
    'md': '750px',
    // => @media (min-width: 640px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'lx': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  // theme section
  theme: {
    extend: {
      // color palattes
      colors: {
        "primary-color": "",
        "secondary-color": "",
        "primary-textColor": "",
        "secondary-textColor": "",
      },
      // font familys
      fontFamily: {
        "poppins": ["poppins", "serif"]
      }
    },
  },
  plugins: [
    // added flowbite plugin
    // require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

