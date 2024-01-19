import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const Rating = ({ rating }) => {
  const totalStars = 5;

  let starsFull = [];
  let starsEmpty = [];

  for (let index = 0; index < rating; index++) {
    starsFull.push(<FaStar key={index} className="stars" />);
  }

  for (let index = 0; index < (totalStars-rating); index++) {
    starsEmpty.push(<FaStar key={index} className="starsGrey"/>);
  }
  

  return (
    <>
      {starsFull}
      {starsEmpty}
    </>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
