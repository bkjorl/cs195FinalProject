const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventName: {
      type: String,
      required: true,
  },
  eventDescription: {
      type: String,
      required: false,
  },
  startDate: {
      type: date,
      required: true,
  },
  endDate: {
      type: date,
      required: true,
  },
    startTime: {
      type: time,
      required: true,
  },
  endTime: {
      type: time,
      required: true,
  },
  importance: {
      type: number,
      required: true,
  },
},
{
timestamps: false,
}
);

module.exports = mongoose.model("Event", EventSchema);
