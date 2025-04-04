import React from "react";
import "./Recommendations.css";

const recommendations = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/images/travel2.jpeg`,  
    title: "Discover",
    link: "#",
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/images/travel1.jpeg`, 
    title: "Explore",
    link: "#",
  },
];

function Recommendations() {
  return (
    <section className="recommendations">
      <h2>EXPLORE</h2>
      <div className="recommendations-container">
        {recommendations.map((item) => (
          <div key={item.id} className="recommendation-card">
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3> {/* Display title */}
              <a href={item.link}>See more →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommendations;