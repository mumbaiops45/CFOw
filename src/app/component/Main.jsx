import React from "react";
import "../styles/main.modal.css";
import { FaPhoneAlt } from "react-icons/fa";

const Main = () => {
  return (
    <div className="bdystl">
      <section className=" hero-section">
        <div className="container">
          <div className="d-flex flex-lg-row flex-column align-items-center hero-flex">
            <div className="hero-content text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold hero-title">
                <span className="txt-typing">Radiant Services Company</span>
              </h1>
              <p className="hero-text mt-3">
                At Radiant Services Company, we empower businesses to thrive with expert
                financial and legal solutions. Our team of seasoned Chartered Accountants
                and consultants provides end-to-end support, including income tax and GST
                filings, legal drafting, strategic planning, and statutory compliance.
              </p>
              <a href="tel:+918454816913" className="btn mt-4 hero-btn">
                <FaPhoneAlt /> +91 8454816913
              </a>
            </div>
            <div className="hero-image-wrapper">
              <img
                src="https://t3.ftcdn.net/jpg/06/01/50/04/240_F_601500482_YkN2Fxn4jDW6M8ymLIeKC4xwp6Qe9St0.jpg"
                alt="Business & Finance"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
