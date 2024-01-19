import PropTypes from "prop-types";

const Tags = ({text}) => {
  return <p className="tags">{text}</p>;
};

Tags.propTypes = {
  text : PropTypes.string.isRequired,
};

export default Tags;
