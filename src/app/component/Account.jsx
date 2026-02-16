'use client';

import React from 'react';
import "../styles/account.modal.css";

const Account = () => {
  return (
    <section className="account-section">
      <div className="account-header">
        <h1>Accounting Challenges We Tackle for Global Businesses</h1>
        <p>
          At <strong>Whiz Consulting</strong>, our virtual accountants provide precise oversight 
          and strategic financial support to solve key business challenges.
        </p>
      </div>

      <div className="account-challenge">
        <div className="challenge-text">
          <h2>Financial Strategy & Forecasting</h2>
          <p>
            Our virtual CFOs offer data-driven financial strategy and forecasting 
            to help you plan budgets, set growth targets, and make confident decisions
            for sustainable business growth.
          </p>
        </div>

        
        <div className="challenge-image">
          <img 
            src="financial.jpg" 
            alt="Financial Strategy" 
          />
        </div>
      </div>
    </section>
  );
}

export default Account;
