
// 'use client';

// import React, { useEffect, useRef } from "react";
// import "../styles/researchRev.modal.css";

// const ResearchRev = () => {
//   const contentRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("active");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (contentRef.current) observer.observe(contentRef.current);
//     if (imageRef.current) observer.observe(imageRef.current);
//   }, []);

//   return (
//     <section className="research-container">
//       <div ref={contentRef} className="research-content">
//         <h1>
//           From Research to Revenue <br />
//           From Innovation to Industry
//         </h1>
//         <p>
//           We transform cutting-edge research into scalable business solutions.
//         </p>
//         <p>
//           From early-stage research validation to commercialization,
//           we support every step of the journey.
//         </p>
//       </div>

//       <div ref={imageRef} className="research-image">
//         <img src="research.jpg" alt="Research and Innovation" loading="lazy" />
//       </div>
//     </section>
//   );
// };

// export default ResearchRev;


'use client';

import React, { useEffect, useRef } from "react";
import "../styles/researchRev.modal.css";

const ResearchRev = () => {

  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add("active");
          }
        })
      },
      { threshold:0.2 }
    );

    if(contentRef.current) observer.observe(contentRef.current);
    if(imageRef.current) observer.observe(imageRef.current);

  },[]);


  return (

    <section className="research-section-premium">

      <div className="research-card-premium">

        {/* LEFT SIDE */}
        <div ref={contentRef} className="research-content-premium">

         

          <h2 className="research-heading">
            From Innovation to Industry Transformation
          </h2>

          <p className="research-text">
            We transform cutting-edge research into scalable,
            profitable business solutions with strategic
            commercialization support.
          </p>

          <p className="research-text">
            Our experts guide organizations from validation
            to full-scale market deployment.
          </p>

        </div>


        {/* RIGHT SIDE */}
        <div ref={imageRef} className="research-image-premium">

          <img
            src="/research.jpg"
            alt="Research Innovation"
          />

        </div>

      </div>

    </section>

  );

};

export default ResearchRev;