
import BannerApropos from "../components/BannerApropos";
import Collapsis from "../components/Collapsis";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="about">
      <Header/>
      <BannerApropos/> 
      <Collapsis/>
      <Footer/>
    </div>
  );
};

export default About;