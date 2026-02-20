
// 'use client';

// import React from 'react';
// import "../styles/account.modal.css";

// const Account = () => {

//   return (

//     <section className="account-section-premium">

//       <div className="container">

//         <div className="account-premium">

//           <div className="row align-items-center">

        
//             <div className="col-lg-6">
//               <h2 className="account-heading">
//                 Accounting Challenges We Solve for Growing Businesses
//               </h2>

//               <p className="account-text">
//                 Our Virtual CFO team delivers expert financial oversight,
//                 accurate forecasting, and compliance management to help
//                 businesses scale confidently and improve profitability.
//               </p>


//               <div className="account-features">

//                 <div className="account-feature-item">
//                   Budgeting & Forecasting
//                 </div>

//                 <div className="account-feature-item">
//                   Financial Strategy
//                 </div>

//                 <div className="account-feature-item">
//                   Compliance Management
//                 </div>

//                 <div className="account-feature-item">
//                   Profit Optimization
//                 </div>

//               </div>

//             </div>
//             <div className="col-lg-6">

//               <div className="account-image-box">

//                 <img
//                   src="financial.jpg"
//                   alt="Financial Leadership"
//                   className="account-image-premium"
//                 />

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>

//   );

// };

// export default Account;


'use client';

import React from 'react';
import "../styles/account.modal.css";

const Account = () => {
  return (
    <section className="account-section-premium">

      <div className="container">

        <div className="account-premium">
          <div className="row align-items-center">

            {/* LEFT SIDE */}
            <div className="col-lg-6 account-left">
              <h2 className="account-heading">
                Accounting Challenges We Solve for Growing Businesses
              </h2>

              <p className="account-text">
                Our Virtual CFO team delivers expert financial oversight,
                accurate forecasting, and compliance management to help
                businesses scale confidently and improve profitability.
              </p>

              <div className="account-features">
                <div className="account-feature-item">Budgeting & Forecasting</div>
                <div className="account-feature-item">Financial Strategy</div>
                <div className="account-feature-item">Compliance Management</div>
                <div className="account-feature-item">Profit Optimization</div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6 account-right">
              <div className="account-image-box">
                <img
                  src="financial.jpg"
                  alt="Financial Leadership"
                  className="account-image-premium"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Account;