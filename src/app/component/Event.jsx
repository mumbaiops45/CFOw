
"use client";
import React from "react";
import EventCard from "./EventCard";
import "../styles/event.modal.css"

const eventsData = [
    {
        // image: "sta.jpg",
        image: "strat.jpeg",
        title: "Strategic Tax Planning Seminar",
        description:
            "Optimize your financial strategy with proactive tax planning solutions. Learn how to minimize liabilities, maximize savings, and stay compliant with evolving regulations.",
    },
    {
        // image: "reduction.jpg",
        image: "overheaded.jpeg",
        title: "Overhead Reduction Workshop",
        description:
            "Discover practical strategies to streamline operations, reduce unnecessary expenses, and improve efficiency without compromising performance or quality.",
    },
    {
        image: "investment.jpg",
        title: "Future FinTech Investment",
        description:
            "Explore emerging opportunities in financial technology and identify high-growth ventures to build a forward-thinking investment strategy.",
    },
    {
        // image: "audit.png",
        // image: "coprate.jpg",
        image: "coprat.jpeg",
        title: "Corporate Audit & Compliance",
        description:
            "Gain insights into corporate audit practices, regulatory compliance, and risk management strategies to ensure business stability and growth.",
    },
    {
        // image: "blockchain.png",
        // image:"blockchain1.png",
        image: "block.jpeg",
        title: "Blockchain & Crypto Workshop",
        description:
            "Learn how blockchain technology and cryptocurrencies are transforming finance. Discover investment strategies and innovative solutions in the digital economy.",
    },
    {
        // image: "leaderss.jpg",
        // image: "leadership.jpeg",
        image: "la.jpeg",
        title: "Leadership & Financial Strategy",
        description:
            "Enhance your leadership skills while aligning financial strategy with business goals. Practical sessions for executives and decision-makers.",
    },
];

const Event = () => {
    return (
        <div
            className="container-fluid py-5"
            style={{
                background: "linear-gradient(135deg, #0b1f3a 0%, #1e3a5f 100%)",
                padding: "60px 20px",
                color: "#ffffff"
            }}
        >

            {/* <div className="text-center mb-5">
                <p className="text-white fw-medium fs-5 text-center mt-2">
                    Check out the latest events happening now!
                </p>

            </div> */}
            <div className="row">
                {eventsData.map((event, index) => (
                    <EventCard key={index} {...event} index={index} />
                ))}

            </div>
        </div>
    );
};

export default Event;
