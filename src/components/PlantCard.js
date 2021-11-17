import React, { useState } from "react";

function PlantCard({plant}) {
  const {name, image, price} = plant
  const [isStocked, setIsStocked] = useState(true)

  function handleStocked(){
    setIsStocked((isStocked) => !isStocked)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStocked === true ? (
        <button className="primary"
        onClick={handleStocked}
        >In Stock</button>
      ) : (
        <button
        onClick={handleStocked}
        >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
