
// "use client";

// import React, { useState } from "react";
// import EventCard from "./EventCard";
// import eventsData from "../data/EventData";
// import { motion, AnimatePresence } from "framer-motion";
// import "../styles/event.modal.css";
// import { UpOutlined, DownOutlined } from "@ant-design/icons";

// const Event = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [direction, setDirection] = useState(0);

//     const handleNext = () => {
//         if (currentIndex < eventsData.length - 1) {
//             setDirection(1);
//             setCurrentIndex(currentIndex + 1);
//         }
//     };

//     const handlePrev = () => {
//         if (currentIndex > 0) {
//             setDirection(-1);
//             setCurrentIndex(currentIndex - 1);
//         }
//     };

//     const showPrev = currentIndex > 0;
//     const showNext = currentIndex < eventsData.length - 1;

//     return (
//         <div
//             className="container-fluid pt-5"
//             style={{
//                 background: "linear-gradient(135deg, #0B1F3A, #1F2D55)",
//                 color: "#ffffff",
//                 minHeight: "520px",
//             }}
//         >
//             <div className="row align-items-center mt-5">
//                 <div className="col-12 col-md-4 text-start ms-3 ms-md-5 mb-4 mb-md-0 heading-section">
//                     <h2 className="fw-bold">Ongoing Offer/Event</h2>
//                     <p>Check out the latest events happening now!</p>
//                 </div>

//                 <div
//                     className="col-12 col-md-7 position-relative d-flex justify-content-center"
//                     style={{ minHeight: "400px" }}
//                 >
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={currentIndex}
//                             initial={{ opacity: 0, y: direction === 1 ? 50 : -50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: direction === 1 ? -50 : 50 }}
//                             transition={{ duration: 0.5 }}
//                             className="w-100 d-flex justify-content-center position-relative"
//                         >
//                             <EventCard
//                                 name={eventsData[currentIndex].name}
//                                 description={eventsData[currentIndex].description}
//                                 image={eventsData[currentIndex].image}
//                             />
//                         </motion.div>
//                     </AnimatePresence>
//                     {showPrev && (
//                         <UpOutlined
//                             onClick={handlePrev}
//                             className="event-arrow event-arrow-up"
//                         />
//                     )}

//                     {showNext && (
//                         <DownOutlined
//                             onClick={handleNext}
//                             className="event-arrow event-arrow-down"
//                         />
//                     )}

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Event;


// import React from 'react'


// const Event = () => {
//   return (
//     <div>
//       <h1>Check Out the latest events happening now!</h1>
//       <p>Ongoing Offers/Events</p>
//       <div className="card-group">
//   <div className="card">
//     <img src="sta.jpg" className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Strategic Tax Planning Seminar</h5>
//       <p className="card-text">Optimize your financial strategy with proactive tax planning solutions. Learn how to minimize liabilities, maximize savings, and stay compliant with evolving regulations through structured and forward-thinking tax strategies.</p>
      
//     </div>
//   </div>
//   <div className="card">
//     <img src="reduce.png" className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Overhead Reduction Workshop</h5>
//       <p className="card-text">Discover practical strategies to streamline operations, reduce unnecessary expenses, and improve overall efficiency. This workshop focuses on cost optimization techniques that help businesses strengthen profitability without compromising performance or quality.</p>
     
//     </div>
//   </div>
//   <div className="card">
//     <img src="invest.png" className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Future FinTech Investment</h5>
//       <p className="card-text">Explore emerging opportunities in financial technology and discover how innovation is transforming the investment landscape. Learn how to identify high-growth potential ventures and build a forward-thinking investment strategy.</p>
//       <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Event


"use client";
import React from "react";
import EventCard from "./EventCard";
import "../styles/event.modal.css"

// const eventsData = [
//   {
//     image: "sta.jpg",
//     title: "Strategic Tax Planning Seminar",
//     description:
//       "Optimize your financial strategy with proactive tax planning solutions. Learn how to minimize liabilities, maximize savings, and stay compliant with evolving regulations.",
//   },
//   {
//     image: "reduce.png",
//     title: "Overhead Reduction Workshop",
//     description:
//       "Discover practical strategies to streamline operations, reduce unnecessary expenses, and improve efficiency without compromising performance or quality.",
//   },
//   {
//     image: "invest.png",
//     title: "Future FinTech Investment",
//     description:
//       "Explore emerging opportunities in financial technology and identify high-growth ventures to build a forward-thinking investment strategy.",
//   },
// ];

const eventsData = [
  {
    image: "sta.jpg",
    title: "Strategic Tax Planning Seminar",
    description:
      "Optimize your financial strategy with proactive tax planning solutions. Learn how to minimize liabilities, maximize savings, and stay compliant with evolving regulations.",
  },
  {
    image: "reduce.png",
    title: "Overhead Reduction Workshop",
    description:
      "Discover practical strategies to streamline operations, reduce unnecessary expenses, and improve efficiency without compromising performance or quality.",
  },
  {
    image: "invest.png",
    title: "Future FinTech Investment",
    description:
      "Explore emerging opportunities in financial technology and identify high-growth ventures to build a forward-thinking investment strategy.",
  },
  {
    image: "audit.png",
    title: "Corporate Audit & Compliance",
    description:
      "Gain insights into corporate audit practices, regulatory compliance, and risk management strategies to ensure business stability and growth.",
  },
  {
    image: "blockchain.jpg",
    title: "Blockchain & Crypto Workshop",
    description:
      "Learn how blockchain technology and cryptocurrencies are transforming finance. Discover investment strategies and innovative solutions in the digital economy.",
  },
  {
    image: "leadership.jpg",
    title: "Leadership & Financial Strategy",
    description:
      "Enhance your leadership skills while aligning financial strategy with business goals. Practical sessions for executives and decision-makers.",
  },
];

const Event = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Ongoing Offers / Events</h2>
        <p className="text-muted">
          Check out the latest events happening now!
        </p>
      </div>

      <div className="row">
        {eventsData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Event;
