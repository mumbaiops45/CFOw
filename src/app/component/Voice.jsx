"use client";
import React from "react";
import CustomCard from "./CustomCard";
import "../styles/customcard.modal.css";

const Voice = () => {
  const cards = [
    {
      name: "Saheb Narang",
      text:
        "Radiant Company Services offers more than just accounting—they truly understand business. Their insights into financial planning and compliance have saved us time and money.",
    },
    {
      name: "Shivam Singh",
      text:
        "Their team made the entire compliance process stress-free. From legal drafting to GST filings, they were fast and accurate.",
    },
    {
      name: "Kanika",
      text:
        "Radiant Company Services has been a game-changer for our business. Their Virtual CFO support helped us make smarter decisions.",
    },
    {
      name: "Rahul Verma",
      text:
        "Professional, reliable, and very knowledgeable. Their advisory support helped us scale confidently.",
    },
  ];

  return (
    <section className="voice-section">
      <div className="text-center mb-1">
        <h2 className="section-title">Voice of Customer</h2>
      </div>

      <div className="card-grid">
        {cards.map((card, index) => (
          <CustomCard
            key={index}
            name={card.name}
            text={card.text}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Voice;
