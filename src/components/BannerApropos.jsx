import img from '../assets/images/imgApropos.png'

const BannerApropos = () => {
  return (
    <div className="banner">
      <img src={img} alt="montagnes" className="bannerImg" />
      <div className="mask"></div>
    </div>
  );
};

export default BannerApropos;