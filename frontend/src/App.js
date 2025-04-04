import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from "./components/Home";
import Booking from "./components/Booking";
import About from './components/About';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import Checkout from "./components/Checkout";

const basename = process.env.NODE_ENV === "production" ? "/travel-app" : "";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;