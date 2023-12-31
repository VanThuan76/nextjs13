import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyellow: {
          100: "#FFF8E8",
          300: "#FDB81380",
          500: "#FDB813",
          600: "#FFA800",
        },
        cgray: {
          100: "#F3F2F2",
          200: "#F9F9F9",
          400: "#838383",
          500: "#4D4D4D",
          600: "#333333",
        },
        cblue: {
          300: "#0295FF",
          600: "#2D3748",
        },
        cgreen: {
          400: "#77DD77",
          600: "#6C9D5E",
        },
        cred: {
          400: "#FF6961",
        },
        "stroke-color": "#CCD7E2",
      },
      scale: {
        "-100": "-1",
      },
      screens: {
        xs: "480px",
        trader: "1100px",
      },
      boxShadow: {
        sd1: "0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        sd2: "0px 3.5px 5.500000476837158px 0px #00000005",
        sd3: "inset 0px 2px 11px -4px rgba(0,0,0,0.1)",
        sd4: "0px 12px 5px 0px rgba(0,0,0,0.1)"
      },
    },
  },
  darkMode: "class",
  plugins: [require('flowbite/plugin'), nextui()],
}
export default config
