import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import locations from "../data/locations.json";
import arrowRight from "../assets/images/arrowRight.svg";
import arrowLeft from "../assets/images/arrowLeft.svg";
import svgFleche from "../assets/images/arrowLeft.svg";

const Loc = () => {
  const { id } = useParams();

  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = (index) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsVisible(updatedVisibility);
  };

  const location = locations.find((item) => item.id === id);
  console.log(location);
  const [tags, setTags] = useState(location.tags);
  const [description, setDescription] = useState(location.description);
  const [equipement, setEquipement] = useState(location.equipments);
  console.log(description);
  console.log(equipement);
  return (
    <>
      <div className="loc">
        <img src={location.cover} alt={location.title} />
        <img className="arrowRight" src={arrowRight} alt="Flèche Droite" />
        <img className="arrowLeft" src={arrowLeft} alt="Flèche Gauche" />
        <div className="loc-container-left-right">
          <div className="loc-content-right">
            <h2>{location.title}</h2>
            <p>{location.location}</p>
            <div className="container-tags">
              {tags.map((tag, index) => (
                <p key={index} className="tags">
                  {tag}
                </p>
              ))}
            </div>
            <div>
              <h2>Description</h2>
            </div>
            <p>{description}</p>
          </div>
          <div className="loc-content-left">
            <div className="host">
              <h3>{location.host.name}</h3>
              <img src={location.host.picture} alt="photo de l'hébergeur" />
            </div>
            <div className="stars">
              <p>Etoiles{location.rating}</p>
            </div>
            <div className="equipment">
              <h2>Équipements</h2>
              <ul>
                {equipement.map((tag, index) => (
                  <li key={index} className="tags">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loc;
