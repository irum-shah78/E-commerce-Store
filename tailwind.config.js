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
        Gray: 'rgba(74, 74, 74, 1)',
        ellipseBorderColor: 'rgba(173, 173, 173, 1)',
        cardBorderColor: 'rgba(165, 165, 165, 1)',
        customArrowBg: 'rgba(234, 234, 234, 1)',
        categoryBtn: 'rgba(27, 90, 125, 1)',
        productCardBorder: 'rgba(182, 182, 182, 1)',
        iconLightBlue: 'rgba(135, 188, 217, 1)',
        sizeColor: 'rgba(226, 244, 255, 1)',
        newsBorder: 'rgba(212, 212, 212, 1)'
      },
    },
  },
  plugins: [],
}

