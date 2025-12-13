const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Journal = require("../models/Journal");

// GET all journal entries for a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const journal = await Journal.find({userId: req.params.userId}).sort({ createdAt: -1 });
    res.json(journal);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// POST new journal entires
router.post("/", async (req, res) => {
  try {
    const newJournal = new Journal({
      userId: req.body.userId,
      entry: req.body.entry,
    });

    const savedJournal = await newJournal.save();
    res.status(201).json(savedJournal);
  } catch (err) {
    res.status(400).json({ message: "Validation error (missing required fields)" });
  }
});

// DELETE journal entries - debugged with claude
router.delete("/:id", async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID required" });
    }

    const deletedJournal = await Journal.findOneAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedJournal) {
      return res.status(404).json({
        message: "Entry not found",
      });
    }

    res.json(deletedJournal);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
