
"use client";

import React, { useEffect, useState } from "react";
import "../styles/main.modal.css";
import { FaPhoneAlt } from "react-icons/fa";

const financeBgImages = [
  "/partner.jpg",
  "/partner1.jpg",
  "/blockchain.png",
];

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % financeBgImages.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section
      className="sfh-section"
      style={{ backgroundImage: `url(${financeBgImages[activeIndex]})` }}
    >
      <div className="sfh-overlay"></div>

      <div className="sfh-container">
        <div className="sfh-grid">

          <div className="sfh-content">
            <h1 className="sfh-heading">
              Elite Virtual CFO & Financial Advisory for Ambitious Businesses
            </h1>

            <p className="sfh-description">
              Radiant Services Company partners with founders, startups,
              and enterprises to deliver strategic financial clarity,
              regulatory excellence, and scalable growth frameworks.
              From Virtual CFO leadership to GST, taxation, compliance,
              and performance optimization — we drive measurable financial
              transformation.
            </p>

            <div className="sfh-actions">
              <a href="tel:+918454816913" className="sfh-primary-btn">
                <FaPhoneAlt /> Schedule Strategic Consultation
              </a>
            </div>

          </div>

          {/* <div className="sfh-visual">
            <img
              src="/cfohero.png"
              alt="Strategic CFO Advisory"
              className="sfh-image"
            />
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Main;