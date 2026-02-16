import React from "react";
import "../styles/researchRev.modal.css";

const ResearchRev = () => {
  return (
    <section className="research-container">
      <div className="research-content">
        <h1>
          From Research to Revenue <br />
          From Innovation to Industry
        </h1>

        <p>
          We transform cutting-edge research into scalable business solutions. 
          Our mission is to bridge the gap between innovation and real-world 
          industry impact. By combining strategic thinking, advanced technology, 
          and market insights, we help ideas evolve into profitable ventures.
        </p>

        <p>
          From early-stage research validation to product development and 
          commercialization, we support every step of the journey — ensuring 
          innovation creates measurable value and sustainable growth.
        </p>
      </div>

      <div className="research-image">
        <img src="research.jpg" alt="Research and Innovation" />
      </div>
    </section>
  );
};

export default ResearchRev;
