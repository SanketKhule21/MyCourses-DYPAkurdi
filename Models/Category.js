const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 30,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      maxlength: 100,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);
