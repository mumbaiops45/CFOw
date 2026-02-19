
"use client";

import React, { useEffect, useRef, useState } from "react";
import "../styles/customcard.modal.css";

const CustomCard = ({ title, name, text, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
const [hasAnimated, setHasAnimated] = useState(false);
  

  useEffect(() => {
  if (hasAnimated) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setHasAnimated(true);
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  if (cardRef.current) observer.observe(cardRef.current);

  return () => observer.disconnect();
}, [hasAnimated]);


  const animationClass =
    index % 2 === 0 ? "slide-in-left" : "slide-in-right";

  return (
    <div
      ref={cardRef}
      className={`card ${
        isVisible ? `animated-card ${animationClass}` : "card-hidden"
      }`}
    >
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        <p className="card-text">{text}</p>
        {name && (
          <h6 className="card-subtitle ">{name}</h6>
        )}
      </div>
    </div>
  );
};

export default CustomCard;

