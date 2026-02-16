import React from "react";
import "../styles/about.modal.css"

const About = () => {
  return (
    <div className="about-container">
      
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Radiant Services Company</h1>
        <p>
          Empowering Businesses with Financial Clarity & Strategic Growth
        </p>
      </section>

      {/* Intro Section */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Radiant Services Company is a professional financial consultancy firm
          specializing in Chartered Accountant services, taxation, compliance,
          legal documentation, and Virtual CFO solutions. With 10+ years of
          experience and a team of 150+ finance professionals, we help startups,
          MSMEs, and enterprises manage their financial operations with
          precision and confidence.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-grid">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To simplify finance and compliance by delivering transparent,
            efficient, and growth-oriented financial solutions that help
            businesses scale confidently.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To become one of India’s most trusted financial advisory and
            Virtual CFO firms known for integrity, innovation, and measurable
            business impact.
          </p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="about-stats">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div>
            <h3>500+</h3>
            <p>Businesses Served</p>
          </div>
          <div>
            <h3>100,000+</h3>
            <p>Invoices Processed / Month</p>
          </div>
          <div>
            <h3>5,000+</h3>
            <p>Reconciliations Monthly</p>
          </div>
          <div>
            <h3>150+</h3>
            <p>Finance Professionals</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-section">
        <h2>Our Core Values</h2>
        <ul className="values-list">
          <li>Integrity & Transparency</li>
          <li>Accuracy & Compliance</li>
          <li>Client-Centric Approach</li>
          <li>Strategic Financial Growth</li>
          <li>Accountability & Reliability</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Let’s Build Financial Strength Together</h2>
        <p>
          Partner with Radiant Services Company for expert financial,
          compliance, and Virtual CFO solutions tailored to your business.
        </p>
        <button className="cta-btn">Book Consultation</button>
      </section>

    </div>
  );
};

export default About;
