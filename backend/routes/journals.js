const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Journal = require("../models/Journal");

// GET all journal entries
router.get("/", async (req, res) => {
  try {
    const journal = await Journal.find();
    res.json(journal);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// GET specific journal entry
router.get("/:id", async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);

    if (!journal) {
      return res.status(404).json({
        message: "Journal not found",
      });
    }

    res.json(journal);

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// POST new journal entires
router.post("/", async (req, res) => {
  try {
    const newJournal = new Journal({
      entry: req.body.entry,
    });

    const savedJournal = await newJournal.save();
    res.status(201).json(savedJournal);
  } catch (err) {
    res.status(400).json({ message: "Validation error (missing required fields)" });
  }
});

// DELETE journal entries
router.delete("/:id", async (req, res) => {
  try {
    const deletedJournal = await Journal.findByIdAndDelete(req.params.id);

    if (!deletedJournal) {
      return res.status(404).json({
        message: "Journal not found",
      });
    }

    res.json(deletedJournal);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//put new journal entries
router.put("/:id", async (req, res) => {
  try {
    const updatedJournal = await Journal.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      {
        new: true, 
        runValidators: true, 
      }
    );

    if (!updatedJournal) {
      return res.status(404).json({
        message: "Journal not found",
      });
    }

    res.json(updatedJournal);

  } catch (error) {
    res.status(400).json({ message: "Validation Error" });
  }
});

module.exports = router;
