import React from "react";
import Header from "./Header";
import About from "./About";
import Recommendations from "./Recommendations";
import Footer from "./Footer";
import "./Home.css";

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

export default Home;
