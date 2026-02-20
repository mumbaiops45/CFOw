// import React from "react";
// import "../styles/main.modal.css";
// import { FaPhoneAlt } from "react-icons/fa";

// const Main = () => {
//   return (
//     <div className="bdystl">
//       <section className="hero-section">
//         <div className="lines-bgg"></div>
//         <div className="container">
//           <div className="d-flex flex-lg-row flex-column align-items-center hero-flex">
//             <div className="hero-content text-center text-lg-start mb-4 mb-lg-0">
//               <h1 className="display-5 fw-bold hero-title">
//                 <span className="txt-typing">Empowering Businesses with Strategic Financial Leadership</span>
//               </h1>
//               <p className="hero-text mt-3">
//                 At Radiant Services Company, we empower businesses to thrive
//                 with expert financial and legal solutions. Our team of seasoned
//                 Chartered Accountants and consultants provides end-to-end support,
//                 including income tax and GST filings, legal drafting, strategic planning,
//                 and statutory compliance.
//               </p>

//               <a href="tel:+918454816913" className="btn mt-4 hero-btn">
//                 <FaPhoneAlt /> Learn More About Us </a>
//             </div>

//             <div className="hero-image-wrapper">
//               <img
//                 src="cfohero.png"
//                 alt="Business & Finance"
//                 className="hero-image"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Main;


import React from "react";
import "../styles/main.modal.css";
import { FaPhoneAlt } from "react-icons/fa";

const Main = () => {
  return (
    <div className="bdystl">

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-overlay"></div>

        <div className="container">

          <div className="hero-flex">

            {/* LEFT CONTENT */}
            <div className="hero-content">

              {/* <div className="hero-badge">
                Trusted Virtual CFO & Chartered Accountant Firm in India
              </div> */}

              <h1 className="hero-title">
                Empowering Businesses with Strategic Financial Leadership
              </h1>

              <p className="hero-text">
                At Radiant Services Company, we empower businesses to thrive
                with expert financial and legal solutions. Our Chartered
                Accountants and CFO consultants provide GST, income tax,
                compliance, and strategic financial leadership to help you grow
                confidently.
              </p>

              <div className="hero-buttons">

                <a href="tel:+918454816913" className="hero-btn-primary">
                  <FaPhoneAlt /> Book Free Consultation
                </a>

                {/* <a href="#services" className="hero-btn-secondary">
                  Explore Services
                </a> */}
              </div>
            </div>


           
            <div className="hero-image-wrapper">

              <img
                src="/cfohero.png"
                alt="Virtual CFO Services"
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
