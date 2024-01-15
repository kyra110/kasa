import Header from "../components/Header"
import BannerImg from "../components/BannerImg"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <div className="home">
      <Header/>
      <BannerImg/> 
      <Gallery/>
      <Footer/>
    </div>
  );
};

export default Home;