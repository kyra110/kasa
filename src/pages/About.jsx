import BannerApropos from "../components/BannerApropos";
import Collapsis from "../components/Collapsis";
import colapsJson from "../data/colaps.json";

const About = () => {
  return (
    <div className="about">
      <BannerApropos />
      {colapsJson.map((colaps, index) => (
        <Collapsis key={index} index={index} title={colaps.title}>
          {colaps.text}
        </Collapsis>
      ))}
    </div>
  );
};

export default About;
