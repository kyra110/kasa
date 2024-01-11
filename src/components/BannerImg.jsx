import img from '../assets/images/imgAccueil.png'
const BannerImg = () => {
  return (
    <div className="banner">
      <img src={img} alt="montagnes" className="bannerImg" />
      <div className="mask"></div>
      <h1>
        <p>Chez vous,</p>
        <p>partout et ailleurs</p>
      </h1>
    </div>
  );
};

export default BannerImg;