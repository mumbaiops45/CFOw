
'use client';
import React from 'react';
import "../styles/body.modal.css";

const Body = () => {
  return (
    <div className=" body-container container">
      <div className="row align-items-center g-5">
        
        
        <div className="col-lg-6 hero-text-section">
          <h6 className="fw-bold text-uppercase mb-3 sub-title">
            Empowering Businesses with Our Expertise
          </h6>
          <h2 className="fw-bold display-5 mb-4 main-title">
            Financial Services
          </h2>
          <p className="mb-5 hero-paragraph">
            About Radiant Services Company: Chartered Accountant, consultancy, income tax & GST filings,
            legal drafting, virtual CFO, strategic planning, statutory compliances. We help businesses
            transform insights into action and ensure financial growth with precision and reliability.
          </p>
          
          <div className="row  hero-btn-grid">
            <div className="col-6">
              <button className="btn fancy-btn w-100">
                <i className="fas fa-chart-line me-2"></i> Virtual CFO
              </button>
            </div>
            <div className="col-6">
              <button className="btn fancy-btn w-100">
                <i className="fas fa-file-alt me-2"></i> Statutory 
              </button>
            </div>
            <div className="col-6">
              <button className="btn fancy-btn w-100">
                <i className="fas fa-money-bill-wave me-2"></i> Tax Filings
              </button>
            </div>
            <div className="col-6">
              <button className="btn fancy-btn w-100">
                <i className="fas fa-lightbulb me-2"></i>  Planning
              </button>
            </div>
          </div>
        </div>

        
        <div className="col-lg-6 hero-image-section">
          <img
            src="https://media.istockphoto.com/id/1419539600/photo/business-presentation-and-man-on-a-laptop-in-a-corporate-conference-or-office-collaboration.webp?b=1&s=170667a&w=0&k=20&c=uucFbLp3S3vTpwmYBtI3tiLQssKCgSbX4GTaQdQeeq4="
            alt="Business"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
