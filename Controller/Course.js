const courseSchema = require("../Models/Course");

exports.getCourseById = (req, res, next, id) => {
  courseSchema.findById(id).exec((err, course) => {
    if (err) {
      res.status(401).json({ error: "Course Not Found" });
      return;
    }
    req.course = course;
    next();
  });
};

exports.createCourse = (req, res) => {
  console.log(req.body);
  var course = new courseSchema(req.body);
  course.save((err, course) => {
    if (err) {
      console.log(err);
    } else {
      console.log("New Course Created");
      res.status(200).send({ success: "Course Created Successfully" });
    }
  });
};

exports.editCourse = (req, res) => {
  courseSchema.findByIdAndUpdate(
    { _id: req.course._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, course) => {
      if (err) {
        res.status(400).json({ error: "Course Not Found" });
        return;
      }

      res.status(200).json({ course: course });
    }
  );
};

exports.getCourse = (req, res) => {
  res.status(200).json(req.course);
};

exports.deleteCourse = (req, res) => {
  courseSchema.deleteOne({ _id: req.course._id }).exec((err, course) => {
    if (err) {
      res.status(401).json({ error: "Course Not Found" });
      return;
    }
    res.status(200).json({ msg: "Course Removed Successfully" });
  });
};

exports.getThumbnail = (req, res) => {
  res.status(200).json(req.course.Thumbnail);
};
