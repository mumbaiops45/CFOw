
"use client";

import React, { useEffect, useRef, useState } from "react";

const CustomCard = ({ name, role, text, index }) => {

  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

  }, []);

  return (

    <div
      ref={ref}
      className={`voice-card ${visible ? "voice-card-visible" : ""}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >

      <div className="voice-quote">
        "
      </div>

      <p className="voice-text">
        {text}
      </p>

      <div className="voice-user">

        <div className="voice-avatar">
          {name.charAt(0)}
        </div>

        <div>

          <div className="voice-name">
            {name}
          </div>

          <div className="voice-role">
            {role}
          </div>

        </div>

      </div>

    </div>

  );

};

export default CustomCard;