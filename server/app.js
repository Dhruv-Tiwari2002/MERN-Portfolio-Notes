// Load required packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/notes");

// Create Express app
const app = express();
app.use(express.json());

app.use(cors()); // Put this above your routes!

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// 1. Get port from env or default to 5000
const PORT = process.env.PORT || 5000;

// 2. Connect to local MongoDB
// I added { strictQuery: true } just to keep my console clean of warnings
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Database connected successfully");

    // Start server AFTER DB is connected
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ DB connection error:", err);
  });


// Simple test route
app.get("/", (req, res) => {
  res.send("Hello! MongoDB is connected locally.");
});