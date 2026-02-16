'use client';
import React, { useEffect, useState } from "react";
import "../styles/virtual.modal.css";

const VirtualCfo = () => {
  const batches = [
    "Budgeting & Forecasting",
    "Financial Reporting",
    "Compliance Management",
    "Strategic Planning"
  ];

  const [text, setText] = useState("");
  const [batchIndex, setBatchIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayAfterTyping = 1000;

    let timeout;

    if (!deleting && charIndex < batches[batchIndex].length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + batches[batchIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!deleting && charIndex === batches[batchIndex].length) {
      timeout = setTimeout(() => setDeleting(true), delayAfterTyping);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setBatchIndex((prev) => (prev + 1) % batches.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, batchIndex]);

  return (
    <section className=" virtual-cfo-section mt-4">
      <div className="virtual-cfo-container container mt-3">
        
        <div className="virtual-image-wrapper">
          <img
            src="virtual.jpg"
            alt="Virtual CFO Services"
            className="virtual-image"
          />
        </div>

        
        <div className="virtual-content">
          <h2 className="virtual-title">
            Outsource Virtual CFO Services to India for Efficient Finances
          </h2>

          <div className="service-highlights mb-3">
            <span className="highlight">{text}</span>
          </div>

          <p className="virtual-description">
            At <strong>Whiz Consulting</strong>, we offer expert virtual CFO services in India,
            tailored for businesses across the <strong>US, UK, Australia, and UAE</strong>. 
            With over <strong>10 years of experience</strong> and a team of <strong>100+ accountants</strong>, 
            we support strategic decision-making through budgeting, forecasting,
            financial reporting, and compliance.
          </p>

          <p className="virtual-description">
            We have proudly served over <strong>500+ businesses</strong> across the UK, US, UAE, and Australia,
            providing reliable financial and accounting solutions that drive growth and profitability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VirtualCfo;
