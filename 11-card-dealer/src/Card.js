import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./Card.css";

function Card({ card }) {
  const [transform, setTransform] = useState();

  useEffect(() => {
    // transfrom: translate(10px, 20px) rotate(20deg);
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    setTransform(`translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`);
  }, []);

  return (
    <img
      style={{ transform: transform }}
      className="image"
      key={card.code}
      alt={card.name}
      src={card.image}
    />
  );
}

export default Card;
