
"use client";

import React, { useState } from "react";
import EventCard from "./EventCard";
import eventsData from "../data/EventData";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/event.modal.css";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

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
            className="container-fluid pt-5"
            style={{
                background: "linear-gradient(135deg, #0B1F3A, #1F2D55)",
                color: "#ffffff",
                minHeight: "520px",
            }}
        >
            <div className="row align-items-center mt-5">
                <div className="col-12 col-md-4 text-start ms-3 ms-md-5 mb-4 mb-md-0">
                    <h2 className="fw-bold">Ongoing Offer/Event</h2>
                    <p>Check out the latest events happening now!</p>
                </div>

                <div
                    className="col-12 col-md-7 position-relative d-flex justify-content-center"
                    style={{ minHeight: "400px" }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: direction === 1 ? 50 : -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: direction === 1 ? -50 : 50 }}
                            transition={{ duration: 0.5 }}
                            className="w-100 d-flex justify-content-center position-relative"
                        >
                            <EventCard
                                name={eventsData[currentIndex].name}
                                description={eventsData[currentIndex].description}
                                image={eventsData[currentIndex].image}
                            />

                            {showPrev && (
                                <UpOutlined 
                                    onClick={handlePrev}
                                    style={{
                                        fontSize: "50px",
                                        color: "white",
                                        cursor: "pointer",
                                        position: "absolute",
                                        top: "-60px",
                                        left: "80%",
                                        transform: "translateX(-50%)",
                                        zIndex: 10,
                                    }}
                                    
                                />
                            )}


                            {showNext && (
                                <DownOutlined
                                    onClick={handleNext}
                                    style={{
                                        fontSize: "50px",
                                        color: "white",
                                        cursor: "pointer",
                                        position: "absolute",
                                        bottom: "50px",
                                        left: "80%",
                                        transform: "translateX(-50%)",
                                        zIndex: 10,
                                    }}
                                />
                            )}

                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Event;
