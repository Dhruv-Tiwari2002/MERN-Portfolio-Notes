const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json("User already exists");
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashed });
  await user.save();

  res.json("User Registered");
});

// Login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).json("User not found");

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.status(400).json("Wrong password");

  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ token });
});

module.exports = router;