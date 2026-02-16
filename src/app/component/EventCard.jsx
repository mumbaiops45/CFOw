
import React from "react";

const EventCard = ({ name, description, image }) => {
    return (
        <div
            className="card"
            style={{
                maxWidth: "500px",
                borderRadius: "15px",
                overflow: "hidden",
                marginBottom: "100px"
            }}
        >
            <div className="row g-0">
                <div className="col-md-4 mt-2" style={{ padding: "0", height: "250px " }}>
                    <img
                        src={image}
                        className="img-fluid"
                        alt={name}
                        style={{
                            height: "100%",
                            padding: "14px 0px 14px 14px",
                            borderRadius: "25px",
                        }}
                    />
                </div>

                <div className="col-md-8">
                    <div className="card-body" style={{ borderRadius: "0 15px 15px 0" }}>
                        <p style={{ marginBottom: "8px", fontWeight: "bold" }}>{name}</p>
                        <hr style={{ margin: "0" }} />
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;

