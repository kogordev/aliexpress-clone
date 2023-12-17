/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "primary":'#F2F2F2',
        "secondary": "#FAFAFA",
        "dark": "#333333",
        "red-custom": "#FF4646",
        "light-gray-custom": "#ffffff"
      },
      maxWidth: {
        '1200': '1200px',
        '1150': '1150px',
        '700' : '700px'
      },
      minWidth: {
        '170': '170px'
      }
      ,
      width: {
        '220': '220px'
      },
      height: {
        '100': '100%'
      },
      fontSize: {
        '15': '15px',
        '16': '16px',
        '13': '13px'
      }
    },
  },
  plugins: [],
}

