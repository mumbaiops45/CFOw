
'use client';
import React from "react";
import "../styles/about.modal.css";
import Clients from "../component/Clients";
import {
    SearchOutlined, BulbOutlined, SettingOutlined, UsergroupAddOutlined,
    ProjectOutlined,
    FileTextOutlined,
    TrophyOutlined
} from "@ant-design/icons";


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

            <section className="about-section slide-up">
                <div className="about-content">
                    <div className="text">
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
                        <div className="approach-grid">
                            <div className="approach-item">
                                <div className="approach-card">Understand</div>
                                <div className="approach-icon">
                                    <SearchOutlined />
                                </div>
                            </div>

                            <div className="approach-item">
                                <div className="approach-card ">Strategize</div>
                                <div
                                    className="approach-icon"
                                    style={{ color: "yellow" }}
                                >
                                    <BulbOutlined />
                                </div>
                            </div>

                            <div className="approach-item">
                                <div className="approach-card">Execute</div>
                                <div className="approach-icon">
                                    <SettingOutlined />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="coprat.jpeg" alt="Hello" />
                    </div>
                </div>
            </section>

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
            <section className="about-section1 slide-up1 delay-3">
                <h2 id="trust">Why Businesses Trust Radiant</h2>
                <div className="why-grid" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <div className="why-item">
                        <UsergroupAddOutlined className="iconsit" style={{ fontSize: "32px", marginRight: "1.5rem" }} />
                        10+ Years Experience
                    </div>
                    <div className="why-item">
                        <UsergroupAddOutlined className="iconsit" style={{ fontSize: "32px", marginRight: "1.5rem" }} />
                        150+ Professionals
                    </div>
                    <div className="why-item">
                        <FileTextOutlined className="iconsit" style={{ fontSize: "32px", marginRight: "1.5rem" }} />
                        100,000+ Monthly Invoices
                    </div>
                    <div className="why-item">
                        <ProjectOutlined className="iconsit" style={{ fontSize: "32px", marginRight: "1.5rem" }} />
                        500+ Projects Completed
                    </div>
                </div>
            </section>

            <section className="about-stats">
                <h2 style={{
                    marginBottom: "40px",
                    fontWeight: "500"
                }}>Our Impact</h2>
                <div className="clients-wrapper" style={{ marginTop: "80px" }}>
                    <Clients />
                </div>
            </section>
<section className="about-team slide-up delay-4">
                <h2>Meet Our Experts</h2>
                <div className="team-grid">
                    <div className="team-card">
                        <img src="team1.jpg" alt="John Doe" />
                        <h3>John Doe</h3>
                        <p>Chief Financial Officer</p>
                    </div>
                    <div className="team-card">
                        <img src="team2.jpg" alt="Jane Smith" />
                        <h3>Jane Smith</h3>
                        <p>Senior Chartered Accountant</p>
                    </div>
                    <div className="team-card">
                        <img src="team3.jpg" alt="Robert Lee" />
                        <h3>Robert Lee</h3>
                        <p>Virtual CFO Expert</p>
                    </div>
                </div>

                <h2 style={{ marginTop: "60px" }}>What Our Clients Say</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p>"Radiant Services transformed our financial strategy, enabling scalable growth!"</p>
                        <span>- Priya Sharma, CEO of Radiant Services Company</span>
                    </div>
                    <div className="testimonial-card">
                        <p>"Expert guidance and highly professional team. Highly recommend!"</p>
                        <span>- Rajesh Kumar, Founder of Radiant Services Company</span>
                    </div>
                    <div className="testimonial-card">
                        <p>"Their Virtual CFO services streamlined our operations and finances efficiently."</p>
                        <span>- Sneha Mehta, CFO of LMN Enterprises</span>

                    </div>
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
