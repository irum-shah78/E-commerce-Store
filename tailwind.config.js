/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
        customBlue: 'rgba(0, 63, 98, 1)',
        customYellow: 'rgba(237, 164, 21, 1)',
        customGray: 'rgba(96, 96, 96, 1)',
        customLightBlue: 'rgba(226, 244, 255, 1)',
        customMarker: 'rgba(217, 217, 217, 1)',
        lightBlue: 'rgba(179, 212, 229, 1)',
        Gray: 'rgba(74, 74, 74, 1)'
      },
    },
  },
  plugins: [],
}

