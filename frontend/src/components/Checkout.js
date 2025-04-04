import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedDestinations, setSelectedDestinations] = useState(
    location.state?.selectedDestinations || []
  );

  const handleRemove = (index) => {
    const updatedDestinations = selectedDestinations.filter((_, i) => i !== index);
    setSelectedDestinations(updatedDestinations);
  };

  return (
    <div style={{padding: "60px"}}>
      <h1>Checkout Page</h1>
      <button onClick={() => navigate("/booking")} style={{marginBottom: "20px", border: "none", padding: "10px"}}>← Back to Booking</button>
      
      {selectedDestinations.length > 0 ? (
        <div>
          {selectedDestinations.map((destination, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img src={destination.image} alt={destination.name} width="100" style={{marginRight: "20px"}}/>
              <p>{destination.name}</p>
              <button onClick={() => handleRemove(index)} style={{ marginLeft: "10px", border: "none", padding: "10px" }}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No destination selected</p>
      )}
    </div>
  );
};

export default Checkout;