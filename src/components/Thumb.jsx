import React, { useEffect, useState } from "react";
import locations from "../data/locations.json";
console.log(locations);
const Thumb = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Utilisez la fonction setData pour mettre à jour l'état
    setData(locations);
  }, []);

  return (
    <>
      {data.map((location, index) => (
        <div key={`${location}-${index}`} className="thumb">
          <img src={location.cover} alt={location.title} />
          <h2 key={`${location}-${index}`}>{location.title}</h2>
        </div>
      ))}
    </>
  );
};

export default Thumb;
