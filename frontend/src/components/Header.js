import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './Header.css';

function Header() {
  return (
    <header className="hero-header">
      <h2 className='header2'>✈Travelpal</h2>
      <Link to="/booking" className="booking-btn" style={{textDecoration: "none"}}>
        BOOKINGS
      </Link>
    </header>
  );
}

export default Header;