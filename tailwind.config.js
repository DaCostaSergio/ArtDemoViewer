/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'logoLaptop': '38px',
      'logoDesktop': '76px',
      'phoneLogo': '36.7px',

      'title': '55px',
      'desktopTitle': '100px',
      'phoneTitle': '25.4px',

      'subTitle': '20px',
      'desktopSubTitle': '30px',
      'phoneSubTitle': '10px',

      'laptopNumberCards': '71.4px',
      'desktopNumberCards': '142px',
      'phoneNumberCards': '36px',

      'laptopTitleCards': '30.72px',
      'dektopTitleCards': '60px',
      'phoneTitleCards': '15.3px',

      'laptopTextCards': '18.8px',
      'dektopTextCards': '36px',
      'phoneTextCards': '14px',


      'laptopCommentTitle': '35px',
      'desktopCommentTitle': '70px',
      'phoneCommentTitle': '17.5px',


      'laptopCommentText': '29.44px',
      'dektopCommentText': '60px',
      'phoneCommentText': '15.5px',

      'laptopCommentApostrophe': '141.4px',

      'phoneTrialTitle': '25px',
      'laptopTrialTitle': '52px',
      'desktopTrialTitle': '104px',

      'laptopMenu': '20px',
      'desktopMenu': '30px',
    },
    screens: {
      'phone': '375px',
      // => @media (min-width: 640px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '2800px',
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
        'poppins': ["Poppins", "sans-serif"]
      },
      width: {
        'laptopCards': '400px',
        'desktopCards': '650px',
        'phoneCards': '216px',

        'laptopIphone': '800px',

        'laptopCircle': '278px',
        'laptopAbout': '645.4px',


        'phoneTrial': '250.4px',
        'laptopTrial': '1133.4px',
      },
      height: {
        'laptopCards': '550.7px',
        'desktopCards': '950.7px',
        'phoneCards': '350.4px',

        'laptopHomeHeight' : '1200px',
        'desktopHomeHeight' : '2400px',

        'laptopComment' : '766px',

        'laptopSection': '888px',
        'desktopSection': '1600px',

        'laptopPictureSofa': '690.7px',
        'desktopPictureSofa': '1200.7px',
        'phonePictureSofa': '345.4px',

        'laptopHome': '1264.9px'
      },
      margin: {
        'laptopMargin': '241.4px',
      },
      padding: {
        'phonePadding': '47.3px',

        'laptopPadding': '241.4px',
        'desktopPadding': '400.4px',
        'laptopSectionPadding': '177.4px',
      }
    },
  },
  plugins: [],
}