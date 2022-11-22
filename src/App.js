
import './App.css';

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
    <div className="font-Poppins">
      <div className="bg-fixed bg-[url('Assets/HomeImage.png')] bg-center bg-cover h-screen ">
        <div className="fixed w-full laptop:px-20 pt-10 bg-white">
          <NavBar></NavBar>
        </div>
        <div id="home" className="laptop:px-laptopPadding">
          <SectionHome></SectionHome>
        </div>
      </div>
      <div className="bg-taupe">
        <div className="   bg-[url('Assets/Path.png')] bg-cover bg-no-repeat">
          <div className="laptop:px-laptopPadding laptop:pb-laptopSectionPadding">
            <SectionIphone></SectionIphone>
          </div>
        </div>
      </div>
      <div id="howItWorks" className="laptop:px-laptopPadding laptop:pb-laptopSectionPadding">
        <SectionCards></SectionCards>
      </div>
      <div className="laptop:px-laptopPadding laptop:pb-laptopSectionPadding">
        <SectionTechnology></SectionTechnology>
      </div>
      <div className="laptop:px-laptopPadding bg-purple h-laptopSection">
        <div id="pricing" className="py-20">
          <SectionPricing></SectionPricing>
        </div>
      </div>
      <div className="bg-taupe">
        <div id="why" className="laptop:px-laptopPadding  laptop:pb-laptopSectionPadding" >
          <SectionExperience></SectionExperience>
        </div>
      </div>
      <div className="laptop:px-laptopPadding">
        <SectionAbout></SectionAbout>
      </div>
      <div className="bg-[url('Assets/PathFooter.png')] bg-bottom bg-contain bg-no-repeat">
        <div className="laptop:px-laptopPadding  laptop:py-laptopSectionPadding" >
          <SectionTrial></SectionTrial>
        </div>
        <div id="contact" className="laptop:px-laptopPadding">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
