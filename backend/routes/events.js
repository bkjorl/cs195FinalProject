const express = require("express");
const router = express.Router();
const User = require("../models/Event");

// GET all events
router.get("/", async (req, res) => {
  try {
    const events = await Events.find();
    res.json(evemts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new events
router.post("/", async (req, res) => {
  try {
    const events = new Event({
      title: req.body.title,
      author: req.body.author,
    });

    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE users
router.delete("/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
