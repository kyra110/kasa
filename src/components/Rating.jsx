import PropTypes from "prop-types";
import starFull from "../assets/images/starFull.svg";
import starEmpty from "../assets/images/starGrey.svg";

const Rating = ({ rating }) => {
  const totalStars = 5;

  let starsFull = [];
  let starsEmpty = [];

  for (let index = 0; index < rating; index++) {
    starsFull.push(<img className="stars" key={index} src={starFull} alt="Full Star" />);
  }

  for (let index = 0; index < (totalStars - rating); index++) {
    starsEmpty.push(<img className="starsGrey" key={index} src={starEmpty} alt="Empty Star" />);
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
