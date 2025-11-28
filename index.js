const express = require("express"); // Express framework
const mongoose = require("mongoose"); // MongoDB ODM
const Product = require("./models/product.model.js"); // Product model
const productRoute = require("./routes/product.route.js"); // Product routes
const app = express(); // Initialize Express app
require("dotenv").config(); // Load environment variables

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data

// Routes
app.use("/api/products", productRoute); // Product API routes
app.get("/", (req, res) => res.send("Hello from API")); // Test route

// DB Connection and Server Start
// Connect to MongoDB and start Express server
mongoose
  .connect(process.env.MONGO_URI) // Use MongoDB URI from .env file
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => { // Start HTTP server on PORT from .env file
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("MongoDB connection failed:", err)); // Log connection errors
