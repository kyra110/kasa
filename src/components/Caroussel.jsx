import PropTypes from "prop-types";
import arrowRight from "../assets/images/arrowRight.svg"
import arrowLeft from "../assets/images/arrowLeft.svg"
import { useState } from 'react';



const Caroussel = ({slides}) => {
// slides et un tableau qui contient le lien pour chaque image du caroussel
const [currentIndex, setCurrentIndex] = useState(0);

const handlePrevClick = () => {
  //si l'index est égal à 0, on passe à la dernière slide
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
};

const handleNextClick = () => {
  //si l'index est égal à la dernière slide, on passe à la première
  setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
};

const currentSlide = slides[currentIndex];
const numSlides = slides.length;

// Vérifier si plus d'une slide est présente avant d'afficher les flèches
const shouldShowArrows = numSlides > 1;
const shouldShowIndicator = numSlides > 1;
  return (
    <div className="caroussel">
       <img className="slider" src={currentSlide} alt={`Slide ${currentIndex + 1}`} />
       {shouldShowArrows && (
        <>
        <img className="arrowRight" src={arrowRight} alt="Flèche Droite" onClick={handleNextClick}/>
        <img className="arrowLeft" src={arrowLeft} alt="Flèche Gauche" onClick={handlePrevClick} />
        </>
       )}
       {shouldShowIndicator && (
         <div className="slide-indicator">{`${currentIndex + 1}/${slides.length}`}</div>
        )}
    </div>
  );
};
Caroussel.propTypes = {
  slides : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Caroussel;