const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userFirstName: {
      type: String,
      required: true,
  },
  userLastName: {
      type: String,
      required: true,
  },
  userEmail: {
      type: String,
      required: true,
  },
  userUName: {
      type: String,
      required: true,
  },
  userPassword: {
      type: String,
      required: true,
  },
},
{
timestamps: false,
}
);

module.exports = mongoose.model("User", userSchema);
