const mongoose = require("mongoose");

const enrollmentSchema = mongoose.Schema(
  {
    duration: {
      type: String,
      maxlength: 30,
      required: true,
    },
    certificate: {
      type: String, //TODO: s3 Link
    },
    status: {
      type: String,
      maxlength: 10,
      default: "Incomplete",
    },
    grade: {
      type: String,
      maxlength: 10,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Enrollment", enrollmentSchema);
