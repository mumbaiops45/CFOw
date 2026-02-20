
// 'use client';
// import React from 'react';
// import "../styles/body.modal.css";

// const Body = () => {
//   return (
//     <div className=" body-container container">
//       <div className="row align-items-center g-5">
        
        
//         <div className="col-lg-6 hero-text-section">
//           <h6 className="fw-bold text-uppercase mb-3 sub-title">
//             Empowering Businesses with Our Expertise
//           </h6>
//           <h2 className="fw-bold display-5 mb-4 main-title">
//             Financial Services
//           </h2>
//           <p className="mb-5 hero-paragraph">
//             About Radiant Services Company: Chartered Accountant, consultancy, income tax & GST filings,
//             legal drafting, virtual CFO, strategic planning, statutory compliances. We help businesses
//             transform insights into action and ensure financial growth with precision and reliability.
//           </p>
          
//           <div className="row  hero-btn-grid">
//             <div className="col-6">
//               <button className="btn fancy-btn w-100">
//                 <i className="fas fa-chart-line me-2"></i> Virtual CFO
//               </button>
//             </div>
//             <div className="col-6">
//               <button className="btn fancy-btn w-100">
//                 <i className="fas fa-file-alt me-2"></i> Statutory 
//               </button>
//             </div>
//             <div className="col-6">
//               <button className="btn fancy-btn w-100">
//                 <i className="fas fa-money-bill-wave me-2"></i> Tax Filings
//               </button>
//             </div>
//             <div className="col-6">
//               <button className="btn fancy-btn w-100">
//                 <i className="fas fa-lightbulb me-2"></i>  Planning
//               </button>
//             </div>
//           </div>
//         </div>

        
//         <div className="col-lg-6 hero-image-section">
//           <img
//             src="https://media.istockphoto.com/id/1419539600/photo/business-presentation-and-man-on-a-laptop-in-a-corporate-conference-or-office-collaboration.webp?b=1&s=170667a&w=0&k=20&c=uucFbLp3S3vTpwmYBtI3tiLQssKCgSbX4GTaQdQeeq4="
//             alt="Business"
//             className="img-fluid rounded shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;



// 'use client';
// import React from 'react';
// import "../styles/body.modal.css";

// const Body = () => {
//   return (

//     <section className="premium-section">

//       <div className="container">

//         <div className="row align-items-center premium-flex">

          
//           <div className="col-lg-6 premium-text">

//             <div className="premium-badge">
//               FINANCIAL SERVICES
//             </div>

//             <h2 className="premium-title">
//               Strategic Financial Solutions for Modern Businesses
//             </h2>

//             <p className="premium-description">
//               Radiant Services Company delivers expert Virtual CFO, tax,
//               compliance, and strategic advisory services. Our Chartered
//               Accountants help businesses improve profitability, ensure
//               compliance, and make smarter financial decisions.
//             </p>


           
//             <div className="service-grid">

//               <div className="service-card">
//                 <div className="service-icon">📊</div>
//                 <div>
//                   <h4>Virtual CFO</h4>
//                   <p>Strategic financial leadership</p>
//                 </div>
//               </div>

//               <div className="service-card">
//                 <div className="service-icon">📑</div>
//                 <div>
//                   <h4>Statutory Compliance</h4>
//                   <p>Ensure legal and financial compliance</p>
//                 </div>
//               </div>

//               <div className="service-card">
//                 <div className="service-icon">💰</div>
//                 <div>
//                   <h4>Tax & GST Filing</h4>
//                   <p>Accurate and timely filings</p>
//                 </div>
//               </div>

//               <div className="service-card">
//                 <div className="service-icon">📈</div>
//                 <div>
//                   <h4>Strategic Planning</h4>
//                   <p>Growth-focused financial strategy</p>
//                 </div>
//               </div>

//             </div>


          
//             <a href="#contact" className="premium-btn">
//               Explore All Services →
//             </a>

//           </div>


         
//           <div className="col-lg-6 premium-image-wrapper">

//             <div className="image-glow"></div>

//             <img
//               src="/cfohero.png"
//               alt="Virtual CFO Services"
//               className="premium-image"
//             />

//           </div>

//         </div>

//       </div>

//     </section>

//   );
// };

// export default Body;


'use client';
import React from 'react';
import "../styles/body.modal.css";

const Body = () => {
  return (
    <section className="hero-wrapper">

      {/* background shape */}
      <div className="hero-bg-shape"></div>

      <div className="container hero-container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <h1 className="hero-title1">
              Strategic Financial Leadership
              <span className="hero-highlight"> for Growing Businesses</span>
            </h1>

            <p className="hero-desc">
              Radiant Services Company provides expert Virtual CFO, tax,
              compliance, and strategic advisory services. We help companies
              improve profitability, maintain compliance, and scale with
              confidence.
            </p>

            {/* premium cards */}
            <div className="hero-card-grid">

              <div className="hero-card">
                <div className="card-icon">📊</div>
                <div>
                  <h6>Virtual CFO</h6>
                  <p>Financial strategy & leadership</p>
                </div>
              </div>

              <div className="hero-card">
                <div className="card-icon">📁</div>
                <div>
                  <h6>Compliance</h6>
                  <p>Statutory & legal compliance</p>
                </div>
              </div>

              <div className="hero-card">
                <div className="card-icon">💰</div>
                <div>
                  <h6>Tax Filing</h6>
                  <p>GST & Income tax services</p>
                </div>
              </div>

              <div className="hero-card">
                <div className="card-icon">📈</div>
                <div>
                  <h6>Business Growth</h6>
                  <p>Planning & advisory</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">

            <div className="hero-image-box">

              <img
                src="static.png"
                alt="CFO Services"
                className="hero-image"
              />

              <div className="floating-card">
                <span>15+ Years Experience</span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Body;
