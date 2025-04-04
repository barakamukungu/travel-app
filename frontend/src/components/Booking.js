import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Booking.css';

const Booking = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setDestinations([
      { name: "Paris, France", image: `${process.env.PUBLIC_URL}/images/travel5.jpeg` },
      { name: "Tokyo, Japan", image: `${process.env.PUBLIC_URL}/images/travel6.jpeg` },
      { name: "New York, USA", image: `${process.env.PUBLIC_URL}/images/travel11.jpeg` },
      { name: "Santorini, Greece", image: `${process.env.PUBLIC_URL}/images/travel10.jpeg` },
      { name: "Phuket, Thailand", image: `${process.env.PUBLIC_URL}/images/travel12.jpeg` },
      { name: "Bali, Indonesia", image: `${process.env.PUBLIC_URL}/images/travel9.jpeg` },
      { name: "Giraffe Manor, Kenya", image: `${process.env.PUBLIC_URL}/images/travel8.jpeg` },
      { name: "Sydney, Australia", image: `${process.env.PUBLIC_URL}/images/travel7.jpeg` },
    ]);
  }, []);  

  const handleSelect = (destination) => {
    if (!selectedDestinations.includes(destination)) {
      setSelectedDestinations([...selectedDestinations, destination]);
    }
  };

  const handleRemove = (destination) => {
    setSelectedDestinations(selectedDestinations.filter(dest => dest !== destination));
  };

  const handleCheckout = () => {
    console.log(selectedDestinations);
    navigate("/checkout", { state: { selectedDestinations } });
  };

  return (
    <div className="booking-container">
      <h1>Available Destinations</h1>
      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <h2>{destination.name}</h2>
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <button className="book-btn" onClick={() => handleSelect(destination)}>Select</button>
          </div>
        ))}
      </div>

      {selectedDestinations.length > 0 && (
        <div className="selected-destinations">
          <h2>Selected Destinations</h2>
          {selectedDestinations.map((destination, index) => (
            <div key={index} className="selected-card">
              <p>{destination.name}</p>
              <button className="remove-btn" onClick={() => handleRemove(destination)} style={{border: "none", padding: "10px"}}>Remove</button>
            </div>
          ))}
          <button className="checkout-btn" onClick={handleCheckout} style={{backgroundColor: "#1c8a7f"}}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Booking;