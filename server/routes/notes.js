const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const auth = require("../middleware/auth");

// Create Note
router.post("/", auth, async (req, res) => {
  try {
    const note = new Note({
      userId: req.user.id,
      ...req.body
    });
    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json("Server error while creating note");
  }
});

// Get Notes
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
  } catch (err) {
    res.status(500).json("Server error while fetching notes");
  }
});

// Update Note (SECURE)
router.put("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, 
      req.body,
      { new: true }
    );
    
    if (!note) return res.status(404).json("Note not found or unauthorized");
    res.json(note);
  } catch (err) {
    res.status(500).json("Server error");
  }
});

// Delete Note (SECURE)
router.delete("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    
    if (!note) return res.status(404).json("Note not found or unauthorized");
    res.json("Deleted");
  } catch (err) {
    res.status(500).json("Server error");
  }
});

module.exports = router;