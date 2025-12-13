const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
  },
  entry: {
    type: String,
    default: ""
  }
},
{
timestamps: true,
}
);

module.exports = mongoose.model("Journal", JournalSchema);
