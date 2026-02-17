
'use client';
import React from "react";
import "../styles/about.modal.css";
import Clients from "../component/Clients";

export default function page() {
    return (
        <div className="about-container mt-5">
            <section className="about-hero fade-in">
                <h1>About Radiant Services Company</h1>
                <p>
                    Trusted Chartered Accountants & Virtual CFO Experts Delivering
                    Strategic Financial Leadership Across India
                </p>
            </section>


            <section className="about-section  slide-up">
                <h2>Who We Are</h2>
                <p>
                    Radiant Services Company is a premier financial consultancy and
                    Chartered Accountant firm dedicated to helping businesses achieve
                    financial clarity, compliance excellence, and sustainable growth.
                </p>
                <p>
                    With 10+ years of experience and 150+ finance professionals,
                    we transform financial data into strategic decisions.
                </p>
            </section>


            <section className="about-section slide-up delay-1">
                <h2>Our Approach</h2>
                <div className="approach-grid mb-4">
                    <div className="approach-card">Understand</div>
                    <div className="approach-card">Strategize</div>
                    <div className="approach-card">Execute</div>
                    <div className="approach-card">Optimize</div>
                </div>
            </section>


            {/* <section className="about-grid  slide-up delay-2">
                <div className="about-card">
                    <h3>Our Mission</h3>
                    <p>
                        Deliver transparent, growth-focused financial solutions
                        that empower businesses to scale confidently.
                    </p>
                </div>

                <div className="about-card">
                    <h3>Our Vision</h3>
                    <p>
                        To become India’s most trusted Virtual CFO and financial
                        advisory firm.
                    </p>
                </div>
            </section> */}

            <section className="about-section slide-up delay-2">
                <div className="about-grid-container">
                    <div className="about-grid">
                        <div className="about-card">
                            <h3>Our Mission</h3>
                            <p>
                                Deliver transparent, growth-focused financial solutions
                                that empower businesses to scale confidently.
                            </p>
                        </div>

                        <div className="about-card">
                            <h3>Our Vision</h3>
                            <p>
                                To become India’s most trusted Virtual CFO and financial
                                advisory firm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-section  slide-up delay-3">
                <h2>Why Businesses Trust Radiant</h2>
                <div className="why-grid">
                    <div className="why-item">10+ Years Experience</div>
                    <div className="why-item">150+ Professionals</div>
                    <div className="why-item">100,000+ Monthly Invoices</div>
                    <div className="why-item">500+ Projects Completed</div>
                </div>
            </section>

            <section className="about-stats">
                <h2 style={{
                    marginBottom: "40px",
                    fontWeight: "600"
                }}>Our Impact</h2>
                <div className="clients-wrapper" style={{ marginTop: "80px" }}>
                    <Clients />
                </div>
            </section>

            <section className="about-cta slide-up delay-4">
                <h2>Let’s Build Financial Strength Together</h2>
                <p>
                    Partner with Radiant Services Company for expert financial solutions.
                </p>
                <button
                    className="cta-btn"
                    onClick={() => window.location.href = 'tel:+918454816913'}
                >
                    Book Consultation
                </button>
            </section>
        </div>
    );
}
