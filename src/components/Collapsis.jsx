import React, { useState } from 'react';
import svgFleche from '../assets/images/arrow.svg';
import colapsJson from "../data/colaps.json";

const Collapsis = () => {
  const [isVisible, setIsVisible] = useState(colapsJson.map(() => false));

  const handleToggle = (index) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsVisible(updatedVisibility);
  };

  return (
    <div>
      {colapsJson.map((colaps, index) => (
        <div key={`${colaps.title}-${index}`} className={`colapsis ${isVisible[index] ? 'visible' : ''}`}>
          <div className="headColapsis" onClick={() => handleToggle(index)}>
            <h2>{colaps.title}</h2>
            <img
              src={svgFleche}
              alt="flèche"
              className={`arrow ${isVisible[index] ? 'down' : ''}`}
            />
          </div>
            <p className={`paragraph ${isVisible[index] ? 'animate' : ''}`}>{colaps.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Collapsis;




