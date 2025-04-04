import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Booking from "./components/Booking";
import About from './components/About';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import Checkout from "./components/Checkout";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Recommendations />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;