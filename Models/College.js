const mongoose = require("mongoose");

const collegeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 30,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      maxlength: 30,
      required: true,
      unique: true,
    },
    about: {
      type: String,
      maxlength: 90,
      default: "Tell me something about yourself!",
    },
    phone: {
      type: String,
      maxlength: 30,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      maxlength: 30,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("College", collegeSchema);
