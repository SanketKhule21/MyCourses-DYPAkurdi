const enrollmentSchema = require("../Models/Enrollment");

//middleware
exports.getEnrollmnetById = (req, res, next, id) => {
  enrollmentSchema.findById(id).exec((err, enroll) => {
    if (err) {
      res.status(401).json({ error: "enrollment not found" });
      return;
    }
    req.enroll = enroll;
    next();
  });
};

exports.enroll = (req, res) => {
  console.log(req.body);
  var enrollment = new enrollmentSchema(req.body);
  enrollment.save((err, enrollment) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Enrolled");
      res.status(200).send({ success: "Enrolled for course" });
    }
  });
};

exports.getStatus = (req, res) => {
  res.status(200).send({ obj: req.enroll });
};

exports.getCertificate = (req, res) => {
  //res.status(200).send({certificate:req.enroll.certificate})

  enrollmentSchema.findByIdAndUpdate(
    { _id: req.enroll._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, enroll) => {
      if (err) {
        res.status(400).json({ error: "Enrollment Not found" });
        return;
      }
      res.status(200).json({ enroll: enroll });
    }
  );
};

exports.getEnrollmnetList = () => {
  console.log("Get Enrollmnet List");
};

exports.exitFromCourse = (req, res) => {
  enrollmentSchema.deleteOne({ _id: req.profile._id }).exec((err, enroll) => {
    if (err) {
      res.status(401).json({ error: "Could not Get Status" });
      return;
    }
    res.status(200).json({ msg: "Get Deleted Successfully" });
  });
};
