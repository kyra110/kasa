
import Thumb from "./Thumb";
import locations from "../data/locations.json";

const Gallery = () => {
  return (
    <div className="gallery">
      <Thumb locations={locations}/>
    </div>
  );
};

export default Gallery;