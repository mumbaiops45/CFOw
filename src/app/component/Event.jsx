
// "use client";
// import React from "react";
// import EventCard from "./EventCard";
// import "../styles/event.modal.css"

// const eventsData = [
//     {
//         image: "strat.jpeg",
//         title: "Strategic Tax Planning Seminar",
//         description:
//             "Optimize your financial strategy with proactive tax planning solutions. Learn how to minimize liabilities, maximize savings, and stay compliant with evolving regulations.",
//     },
//     {
//         image: "overheaded.jpeg",
//         title: "Overhead Reduction Workshop",
//         description:
//             "Discover practical strategies to streamline operations, reduce unnecessary expenses, and improve efficiency without compromising performance or quality.",
//     },
//     {
//         image: "investment.jpg",
//         title: "Future FinTech Investment",
//         description:
//             "Explore emerging opportunities in financial technology and identify high-growth ventures to build a forward-thinking investment strategy.",
//     },
//     {
//         image: "coprat.jpeg",
//         title: "Corporate Audit & Compliance",
//         description:
//             "Gain insights into corporate audit practices, regulatory compliance, and risk management strategies to ensure business stability and growth.",
//     },
//     {
//         image: "block.jpeg",
//         title: "Blockchain & Crypto Workshop",
//         description:
//             "Learn how blockchain technology and cryptocurrencies are transforming finance. Discover investment strategies and innovative solutions in the digital economy.",
//     },
//     {
//         image: "la.jpeg",
//         title: "Leadership & Financial Strategy",
//         description:
//             "Enhance your leadership skills while aligning financial strategy with business goals. Practical sessions for executives and decision-makers.",
//     },
// ];

// const Event = () => {
//     return (
//         <div
//             className="container-fluid py-5"
//             style={{
//                 background: "linear-gradient(135deg, #0b1f3a 0%, #1e3a5f 100%)",
//                 padding: "60px 20px",
//                 color: "#ffffff"
//             }}
//         >
//             <div className="row">
//                 {eventsData.map((event, index) => (
//                     <EventCard key={index} {...event} index={index} />
//                 ))}

//             </div>
//         </div>
//     );
// };

// export default Event;


"use client";

import React from "react";
import EventCard from "./EventCard";
import "../styles/event.modal.css";

const eventsData = [
  {
    image: "strat.jpeg",
    title: "Strategic Tax Planning Seminar",
    description:
      "Optimize your financial strategy with proactive tax planning solutions.",
    size: "large",
  },
  {
    image: "overheaded.jpeg",
    title: "Overhead Reduction Workshop",
    description:
      "Discover practical strategies to streamline operations and reduce costs.",
    size: "medium",
  },
  {
    image: "investment.jpg",
    title: "Future FinTech Investment",
    description:
      "Explore emerging opportunities in financial technology.",
    size: "medium",
  },
  {
    image: "coprat.jpeg",
    title: "Corporate Audit & Compliance",
    description:
      "Gain insights into audit practices and regulatory compliance.",
    size: "small",
  },
  {
    image: "block.jpeg",
    title: "Blockchain & Crypto Workshop",
    description:
      "Learn how blockchain and cryptocurrencies are transforming finance.",
    size: "small",
  },
  {
    image: "la.jpeg",
    title: "Leadership & Financial Strategy",
    description:
      "Enhance leadership skills while aligning financial strategy.",
    size: "small",
  },
];

const Event = () => {
  return (
    <div className="event-section">
      <div className="container">
        <div className="row g-4">
          {eventsData.map((event, index) => (
            <EventCard key={index} {...event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
