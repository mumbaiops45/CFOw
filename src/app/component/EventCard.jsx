
// import React from "react";

// const EventCard = ({ name, description, image }) => {
//     return (
//         <div
//             className="card"
//             style={{
//                 maxWidth: "500px",
//                 borderRadius: "15px",
//                 overflow: "hidden",
//                 marginBottom: "100px"
//             }}
//         >
//             <div className="row g-0">
//                 <div className="col-md-4 mt-2" style={{ padding: "0", height: "250px " }}>
//                     <img
//                         src={image}
//                         className="img-fluid"
//                         alt={name}
//                         style={{
//                             height: "100%",
//                             padding: "14px 0px 14px 14px",
//                             borderRadius: "25px",
//                         }}
//                     />
//                 </div>

//                 <div className="col-md-8">
//                     <div className="card-body" style={{ borderRadius: "0 15px 15px 0" }}>
//                         <p style={{ marginBottom: "8px", fontWeight: "bold" }}>{name}</p>
//                         <hr style={{ margin: "0" }} />
//                         <p className="card-text">{description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EventCard;


// import React from "react";

// const EventCard = ({ image, title, description, updated }) => {
//   return (
//     <div className="col-12 col-md-6 col-lg-4 mb-4">
//       <div className="card h-100 shadow-sm event-card">
//         <img src={image} className="card-img-top event-img" alt={title} />
//         <div className="card-body d-flex flex-column">
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text flex-grow-1">{description}</p>
//           {updated && (
//             <p className="card-text">
//               <small className="text-muted">{updated}</small>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

import React from "react";

const EventCard = ({ image, title, description, updated }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm event-card">
        <div className="card-hover-wrapper">
          {/* Image Layer */}
          <img src={image} className="card-img-top event-img" alt={title} />

          {/* Text Overlay */}
          <div className="card-text-overlay">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {updated && <small className="text-muted">{updated}</small>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
