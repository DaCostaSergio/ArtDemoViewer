


import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import SectionAbout from './Components/SectionAbout';
import SectionCards from './Components/SectionCards';
import SectionExperience from './Components/SectionExperience';
import SectionHome from './Components/SectionHome';
import SectionIphone from './Components/SectionIphone';
import SectionPricing from './Components/SectionPricing';
import SectionTechnology from './Components/SectionTechnology';
import SectionTrial from './Components/SectionTrial';

function App() {
  return (
    <div className="font-poppins">
      <div className="bg-fixed bg-[url('Assets/HomeImage.png')] bg-center bg-cover bg-no-repeat laptop:bg-cover laptop:h-laptopHomeHeight desktop:h-desktopHomeHeight">
        <div className="fixed  w-full laptop:px-20 pt-6 pb-4 bg-white z-50 ">
          <NavBar></NavBar>
        </div>
        <div id="home" className="px-phonePadding laptop:px-laptopPadding desktop:px-desktopPadding ">
          <SectionHome></SectionHome>
        </div>
      </div>
      <div className="bg-taupe snap-center ">
        <div className=" bg-[url('Assets/Path.png')] laptop:bg-cover bg-no-repeat">
          <div className=" laptop:px-laptopPadding laptop:pb-laptopSectionPadding desktop:px-desktopPadding">
            <SectionIphone></SectionIphone>
          </div>
        </div>
      </div>
      <div id="howItWorks" className="snap-center laptop:px-laptopPadding laptop:pb-laptopSectionPadding desktop:px-desktopPadding">
        <SectionCards></SectionCards>
      </div>
      <div className="snap-start laptop:px-laptopPadding laptop:pb-laptopSectionPadding desktop:px-desktopPadding">
        <SectionTechnology></SectionTechnology>
      </div>
      <div className="snap-center laptop:px-laptopPadding bg-purple laptop:h-laptopSection desktop:px-desktopPadding desktop:h-desktopSection">
        <div id="pricing" className="py-20">
          <SectionPricing></SectionPricing>
        </div>
      </div>
      <div className="bg-taupe snap-center ">
        <div id="why" className="laptop:px-laptopPadding  laptop:pb-laptopSectionPadding desktop:px-desktopPadding" >
          <SectionExperience></SectionExperience>
        </div>
      </div>
      <div className="laptop:px-laptopPadding snap-center ">
        <SectionAbout></SectionAbout>
      </div>
      <div className="snap-center  bg-[url('Assets/PathFooter.png')] bg-bottom bg-contain bg-no-repeat desktop:bg-cover">
        <div className=" laptop:px-laptopPadding  laptop:py-laptopSectionPadding desktop:px-desktopPadding" >
          <SectionTrial></SectionTrial>
        </div>
        <div id="contact" className=" laptop:px-laptopPadding">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
