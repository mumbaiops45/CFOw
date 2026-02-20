
'use client';
import React from "react";
import "../styles/virtual.modal.css";

const VirtualCfo = () => {

  return (

    <section className="vcfo-section">

      {/* <div className="container"> */}

        <div className="vcfo-card">

          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-6">

              {/* <span className="vcfo-tag">
                Virtual CFO Services
              </span> */}

              <h2 className="vcfo-heading">
                Outsource Virtual CFO Services to India for Efficient Finances
              </h2>

              <p className="vcfo-text">
                Gain expert CFO-level financial strategy without hiring a full-time executive.
                We help businesses improve profitability, ensure compliance,
                and make data-driven financial decisions.
              </p>

              <div className="vcfo-grid">

                <div className="vcfo-feature" >
                  Financial Reporting
                </div>

                <div className="vcfo-feature">
                  Budget Planning
                </div>

                <div className="vcfo-feature">
                  Compliance Management
                </div>

                <div className="vcfo-feature">
                  Growth Strategy
                </div>

              </div>

            </div>


            
            <div className="col-lg-6">

              <div className="vcfo-image-container">

                <img
                  src="virtual.jpg"
                  className="vcfo-image"
                  alt="Virtual CFO"
                />

              </div>

            </div>

          </div>

        {/* </div> */}

      </div>

    </section>

  );

};

export default VirtualCfo;
