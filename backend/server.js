const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Serve static images from public folder
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.get("/api/destinations", (req, res) => {
  const destinations = [
    { name: "Paris, France", image: "http://localhost:5000/images/travel5.jpeg" },
    { name: "Tokyo, Japan", image: "http://localhost:5000/images/travel6.jpeg" },
    { name: "New York, USA", image: "http://localhost:5000/images/travel11.jpeg" },
    { name: "Santorini, Greece", image: "http://localhost:5000/images/travel10.jpeg" },
    { name: "Phuket, Thailand", image: "http://localhost:5000/images/travel12.jpeg" },
    { name: "Bali, Indonesia", image: "http://localhost:5000/images/travel9.jpeg" },
    { name: "Giraffe Manor, Kenya", image: "http://localhost:5000/images/travel8.jpeg" },
    { name: "Sydney, Australia", image: "http://localhost:5000/images/travel7.jpeg" },
  ];
  res.json(destinations);
});

app.listen(5000, () => console.log("Server running on port 5000"));