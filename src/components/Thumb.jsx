import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Thumb = ({ locations }) => {

  return (
    <>
      {locations.map((location) => (
        <div key={`routePaths${location.id}`} className="thumb">
          <NavLink to={`/location/${location.id}`}>
            <img src={location.cover} alt={ `photo ${location.title}`} />
            <h2 key={`${location.id}`}>{location.title}</h2>
          </NavLink>
        </div>
      ))}
    </>
  );
};

Thumb.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Thumb;
