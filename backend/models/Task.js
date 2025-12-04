const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskName: {
      type: String,
      required: true,
  },
  taskDescription: {
      type: String,
      required: false,
  },
  estTime: {
      type: time,
      required: true,
  },
  dueDate: {
      type: date,
      required: true,
  },
  completed: {
      type: boolean,
      required: true,
      default: false,
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

module.exports = mongoose.model("Task", TaskSchema);
