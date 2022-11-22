/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
        'logoLaptop': '38px',
        'title' : '73.4px',
        'subTitle' : '15px',
        'laptopNumberCards' : '71.4px',
        'laptopTitleCards' : '30.72px',
        'laptopTextCards' : '18.8px',
        'laptopCommentTitle' : '35px',
        'laptopCommentText' : '29.44px',
        'laptopCommentApostrophe' : '141.4px',
        'laptopTrialTitle' : '52px',
        'laptopMenu' :'20px'
    },
    screens: {
      'phone': '375px',
      // => @media (min-width: 640px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      'green': '#B0E48D',
      'purple': '#3F3D56',
      'white': '#FFFFFF',
      'beige': '#F0EEEB',
      'black': '#000000',
      'taupe': '#F4F4F5',
      'grey': '#828282',
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      width: {
        'laptopCards': '432px',
        'laptopCircle': '278px',
        'laptopAbout' : '645.4px',
        'laptopTrial' : '1133.4px'
      },
      height: {
        'laptopCards' : '550.7px',
        'laptopSection' :'888px',
        'laptopPictureSofa': '690.7px',
        'laptopHome': '1264.9px'
      },
      margin : {
        'laptopMargin' : '241.4px',
      },
      padding : {
        'laptopPadding' : '241.4px',
        'laptopSectionPadding' : '177.4px',
      }
    },
  },
  plugins: [],
}