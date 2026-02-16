

import React from "react";
import "../styles/contact.modal.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-wrapper py-5">
      <div className="container">
        <div className="row g-4">
          
          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="contact-card shadow-lg p-4">
              <h2 className="contact-heading mb-3">Let’s Talk</h2>
              <p className="contact-text mb-4">
                We respond within 60 minutes. Contact our professional CFO team
                for financial, legal & compliance solutions.
              </p>

              <a href="tel:+918454816913" className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div>
                  <h6 className="contact-text">+91 84548 16913</h6>
                </div>
              </a>

              <a href="mailto:hello@gmail.in" className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h6 className="contact-text">hello@gmail.in</h6>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=321,Lodha+Signet,Kolshet+Rd,Thane+West,Maharashtra+400604"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h6 className="contact-text">
                    321, Lodha Signet, Kolshet Rd, Kolshet Industrial Area, <br />
                    Thane West, Maharashtra 400604
                  </h6>
                </div>
              </a>

              <div className="contact-item">
                <FaClock className="contact-icon" />
                <div>
                  <h6 className="contact-text">Office Hours</h6>
                  <p className="contact-subtext">Mon – Sat : 10:00 AM – 7:00 PM</p>
                  <p className="contact-subtext">Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="contact-form-card shadow-lg p-4">
              <h4 className="fw-bold mb-4">Send Us a Message</h4>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" placeholder="Phone Number" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
                </div>
                <button type="submit" className="btn-submit w-100">Submit</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

