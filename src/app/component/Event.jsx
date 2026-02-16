


"use client";

import React, { useState } from "react";
import EventCard from "./EventCard";
import eventsData from "../data/EventData";
import { motion, AnimatePresence } from "framer-motion";

const Event = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentIndex < eventsData.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showPrev = currentIndex > 0;
  const showNext = currentIndex < eventsData.length - 1;

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #0B1F3A, #1F2D55)", // Professional dark gradient
        color: "#ffffff",
      }}
    >
      <div className="row align-items-center">
        <div className="col-12 col-md-4 text-start ms-3 ms-md-5 mb-4 mb-md-0">
          <h2 className="fw-bold">Ongoing Offer/Event</h2>
          <p>Check out the latest events happening now!</p>
        </div>

        <div
          className="col-12 col-md-auto d-flex flex-column flex-md-row justify-content-center align-items-center"
          style={{ gap: "20px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: direction === 1 ? 50 : -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction === 1 ? -50 : 50 }}
              transition={{ duration: 0.5 }}
            >
              <EventCard
                name={eventsData[currentIndex].name}
                description={eventsData[currentIndex].description}
                image={eventsData[currentIndex].image}
              />
            </motion.div>
          </AnimatePresence>

          <div
            className="d-flex flex-column align-items-center mt-3 mt-md-0"
            style={{ gap: "15px" }}
          >
            {showPrev && (
              <i
                className="bi bi-arrow-up-circle-fill text-white"
                style={{ fontSize: "28px", cursor: "pointer" }}
                onClick={handlePrev}
              ></i>
            )}

            {showNext && (
              <i
                className="bi bi-arrow-down-circle-fill text-white"
                style={{ fontSize: "28px", cursor: "pointer" }}
                onClick={handleNext}
              ></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
