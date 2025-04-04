import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Diamond-shaped image */}
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/travel3.jpeg`} alt="About Us" />
        </div>

        {/* Text Content */}
        <div className="about-text">
          <h2>ABOUT US</h2>
          <p>
            Travel to the best destinations in the world. Your journey starts with us.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
