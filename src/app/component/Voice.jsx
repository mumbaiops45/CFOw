// "use client";
// import React from "react";
// import CustomCard from "./CustomCard";
// import "../styles/customcard.modal.css";

// const Voice = () => {
//   const cards = [
//     {
//       name: "Saheb Narang",
//       text:
//         "Radiant Company Services offers more than just accounting—they truly understand business. Their insights into financial planning and compliance have saved us time and money.",
//     },
//     {
//       name: "Shivam Singh",
//       text:
//         "Their team made the entire compliance process stress-free. From legal drafting to GST filings, they were fast and accurate.",
//     },
//     {
//       name: "Kanika",
//       text:
//         "Radiant Company Services has been a game-changer for our business. Their Virtual CFO support helped us make smarter decisions.",
//     },
//     {
//       name: "Rahul Verma",
//       text:
//         "Professional, reliable, and very knowledgeable. Their advisory support helped us scale confidently.",
//     },
//   ];

//   return (
//     <section className="voice-section">
//       <div className="text-center mb-1">
//         <h2 className="section-title">Voice of Customer</h2>
//       </div>

//       <div className="card-grid">
//         {cards.map((card, index) => (
//           <CustomCard
//             key={index}
//             name={card.name}
//             text={card.text}
//             index={index}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Voice;


"use client";

import React from "react";
import CustomCard from "./CustomCard";
import "../styles/customcard.modal.css";

const Voice = () => {

  const cards = [
    {
      name: "Saheb Narang",
      role: "Business Owner",
      text:
        "Radiant Company Services offers more than just accounting — they truly understand business. Their insights saved us time and money.",
    },
    {
      name: "Shivam Singh",
      role: "Startup Founder",
      text:
        "Their team made compliance stress-free. From GST to legal drafting, everything was fast, accurate, and professional.",
    },
    {
      name: "Kanika",
      role: "Finance Director",
      text:
        "Virtual CFO support helped us make smarter decisions and improve profitability significantly.",
    },
    {
      name: "Rahul Verma",
      role: "CEO",
      text:
        "Professional, reliable, and highly knowledgeable. Their financial advisory helped us scale confidently.",
    },
  ];

  return (

    <section className="voice-premium-section">

      <div className="voice-container">

        <div className="voice-header">

          

          <h2 className="voice-title">
            What Our Clients Say
          </h2>

          <p className="voice-subtitle">
            Trusted by businesses worldwide for financial excellence
          </p>

        </div>

        <div className="voice-grid">

          {cards.map((card, index) => (
            <CustomCard
              key={index}
              name={card.name}
              role={card.role}
              text={card.text}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>

  );

};

export default Voice;