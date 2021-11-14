var express = require("express");
const {
  createCourse,
  courseId,
  getCourse,
  editCourse,
  deleteCourse,
  getThumbnail,
  getCourseById,
} = require("../Controller/Course");
var router = express.Router();

router.param("courseId", getCourseById);

router.post("/course/create", createCourse);
router.get("/course/:courseId", getCourse);

router.put("/course/:courseId", editCourse);
router.delete("/course/:courseId", deleteCourse);
router.get("/course/thumbnail/:courseId", getThumbnail);

module.exports = router;
