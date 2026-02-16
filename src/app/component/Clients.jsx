import React from 'react'
import ClientsCard from './ClientsCard';
import "../styles/client.modal.css"

const Clients = () => {

    const stats = [
        { number: "100+", label: "Clients Served" },
        { number: "100000+", label: "Invoices Processed Per Month" },
        { number: "500+", label: "Completed Projects" },
        { number: "5000+", label: "Reconciliations Per Month" },
        { number: "150+", label: "Team Size" }, 
    ];

    return (
    <div className="stats-container-wrapper" style={{ top: "-55px" }}>
        <div className="stats-container">
            <div className="stats-scroll">
                {stats.map((item, index) => (
                    <ClientsCard 
                        key={index} 
                        number={item.number} 
                        label={item.label} 
                    />
                ))}
            </div>
        </div>
    </div>
)

}

export default Clients


