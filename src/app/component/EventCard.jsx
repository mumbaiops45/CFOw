
// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const EventCard = ({ image, title, description, updated, index }) => {
//   const cardRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {
//       if (cardRef.current) observer.unobserve(cardRef.current);
//     };
//   }, []);

//   const directionClass = index % 2 === 0 ? "from-left" : "from-right";

//   return (
//     <div
//       ref={cardRef}
//       className={`col-12 col-md-6 col-lg-4 mb-4 reveal-card ${directionClass} ${
//         isVisible ? "active"
//         : ""
//       }`}
//       style={{ transitionDelay: `${index * 120}ms` }}
//     >
//       <div className="card h-100 shadow-sm event-card">
//         <div className="card-hover-wrapper">
//           <img src={image} className="card-img-top event-img" alt={title} loading="lazy" />
//           <div className="card-text-overlay">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">{description}</p>
//             {updated && <small className="text-muted">{updated}</small>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;




"use client";

import React, { useEffect, useRef, useState } from "react";

const EventCard = ({ image, hoverImage, title, description, index, size }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const sizeClass =
    size === "large"
      ? "col-12"
      : size === "medium"
      ? "col-md-6"
      : "col-md-4";

  return (
    <div
      ref={cardRef}
      className={`${sizeClass} reveal-card ${
        isVisible ? "active" : ""
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`event-card ${size}`}>
        <img src={image} alt={title} className="event-img default-img" />

       
        {hoverImage && (
          <img
            src={hoverImage}
            alt={title}
            className="event-img hover-img"
          />
        )}

        
        <div className="text-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
