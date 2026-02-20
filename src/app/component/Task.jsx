
// "use client";
// import { useState, useEffect, useRef } from "react";
// import Question from "../data/Quetion";
// import { FaCheckCircle } from "react-icons/fa";
// import "../styles/task.modal.css";

// function FAQItem({ question, answer, index }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(ref.current);
//         }
//       },
//       { threshold: 0.2 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`faq-item rounded-xl shadow-lg cursor-pointer mb-4 ${
//         isVisible ? "visible" : ""
//       }`}
//       style={{
//         "--delay": `${index * 0.15}s`,
//       }}
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       <div className="faq-header">
//         <h5 className="faq-question">
//           {question}
//           <span className={`faq-toggle-icon ${isOpen ? "open" : ""}`}>+</span>
//         </h5>
//       </div>
//       <div className={`faq-answer ${isOpen ? "open" : ""}`}>{answer}</div>
//     </div>
//   );
// }

// export default function Task() {
//   return (
//     <section className="faq-section container ">
//       <div className="text-center ">
//         <h2 className="faq-title">Frequently Asked Questions</h2>
//       </div>

//       <div className="row">
//         <div className="col-lg-7">
//           {Question.map((faq, index) => (
//             <FAQItem
//               key={index}
//               question={faq.question}
//               answer={faq.answer}
//               index={index}
//             />
//           ))}
//         </div>

//         <div className="col-lg-5">
//           <div className="sidebar-card mb-4">
//             <h4>Need Financial Guidance?</h4>
//             <p>
//               Our Virtual CFO experts help with compliance, tax planning, and
//               financial strategy.
//             </p>
//             <a href="tel:+918454816913">
//               <button className="btn-book">Book Consultation</button>
//             </a>
//           </div>

//           <div className="sidebar-card">
//             <h4>Why Choose Us?</h4>
//             <ul className="sidebar-features">
//               <li>
//                 <FaCheckCircle className="icon" /> 500+ Businesses Served
//               </li>
//               <li>
//                 <FaCheckCircle className="icon" /> 10+ Years Experience
//               </li>
//               <li>
//                 <FaCheckCircle className="icon" /> PAN India Support
//               </li>
//               <li>
//                 <FaCheckCircle className="icon" /> Trusted Financial Advisors
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import Question from "../data/Quetion";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/task.modal.css";


function FAQItem({ question, answer, index }) {

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const ref = useRef();

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

  }, []);

  return (

    <div
      ref={ref}
      className={`faq-premium-item ${visible ? "faq-show" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >

      <button
        className="faq-premium-question"
        onClick={() => setOpen(!open)}
      >

        <span>{question}</span>

        <span className={`faq-icon ${open ? "rotate" : ""}`}>
          +
        </span>

      </button>

      <div className={`faq-premium-answer ${open ? "open" : ""}`}>

        <p>{answer}</p>

      </div>

    </div>

  );

}



export default function Task() {

  return (

    <section className="faq-premium-section">

      <div className="faq-premium-container">

        {/* HEADER */}

        <div className="faq-header-center">

          
          <h2 className="faq-premium-title">
            Frequently Asked Questions
          </h2>

          <p className="faq-subtitle">
            Everything you need to know about our Virtual CFO services
          </p>

        </div>


        <div className="faq-grid">

          {/* LEFT FAQ */}

          <div>

            {Question.map((faq, index) => (

              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />

            ))}

          </div>


          {/* RIGHT SIDEBAR */}

          <div>

            <div className="faq-premium-card">

              <h3>
                Need Financial Guidance?
              </h3>

              <p>
                Talk with our Virtual CFO experts for compliance,
                tax planning, and strategic growth.
              </p>

              <a href="tel:+918454816913">

                <button className="faq-cta-btn">
                  Book Consultation
                </button>

              </a>

            </div>


            <div className="faq-premium-card">

              <h3>
                Why Choose Radiant?
              </h3>

              <ul className="faq-feature-list">

                <li>
                  <FaCheckCircle /> 500+ Businesses Served
                </li>

                <li>
                  <FaCheckCircle /> 10+ Years Experience
                </li>

                <li>
                  <FaCheckCircle /> PAN India Support
                </li>

                <li>
                  <FaCheckCircle /> Trusted CFO Experts
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}