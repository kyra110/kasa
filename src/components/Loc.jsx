/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import locations from "../data/locations.json";
import arrowRight from "../assets/images/arrowRight.svg";
import arrowLeft from "../assets/images/arrowLeft.svg";
import svgFleche from "../assets/images/arrowLeft.svg";
import Tags from "./Tags";
import Collapsis from "./Collapsis";

const Loc = () => {
  const { id } = useParams();
  const location = locations.find((item) => item.id === id);


  return (
    <>
      <div className="loc">
        <img className="slider" src={location.cover} alt={location.title} />
        <img className="arrowRight" src={arrowRight} alt="Flèche Droite" />
        <img className="arrowLeft" src={arrowLeft} alt="Flèche Gauche" />
        <div className="loc-container-up-down">
          <div className="loc-content-up">
            <div className="loc-content-up-left">
              <h2>{location.title}</h2>
              <h3>{location.location}</h3>
              <div className="container-tags">
                {location.tags.map((tag, index) => (
                  <Tags key={index} text={tag} />
                ))}
              </div>
            </div>
            <div className="hostRating">
              <div className="host">
                <h3>{location.host.name}</h3>
                <img src={location.host.picture} alt="photo de l'hébergeur" />
              </div>
              <div className="stars">
                <p>Etoiles{location.rating}</p>
              </div>
            </div>
          </div>
          <div className="loc-content-down">
            <Collapsis title="Description">{location.description}</Collapsis>
            <Collapsis title="Equipement">
              <ul>
                {location.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            </Collapsis>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loc;
