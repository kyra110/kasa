import img from '../assets/images/imgAccueil.png'
const BannerImg = () => {
  return (
    <div className="banner">
      <img src={img} alt="montagnes" className="bannerImg" />
      <div className="mask"></div>
      
        <h1>Chez vous,
        partout et ailleurs
        </h1>
       
      
    </div>
  );
};

export default BannerImg;