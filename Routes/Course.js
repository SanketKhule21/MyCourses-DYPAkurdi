var express = require("express");
const { isSignedIn, isAuthenticated, isTeacher } = require("../Controller/Auth");
const {
  createCourse,
  courseId,
  getCourse,
  editCourse,
  deleteCourse,
  getThumbnail,
  getCourseById,
} = require("../Controller/Course");
const { getUserById } = require("../Controller/User");
var router = express.Router();

router.param("courseId", getCourseById);
router.param("userId", getUserById);

router.post("/course/:userId", isSignedIn,isAuthenticated,isTeacher,createCourse);
router.get("/course/:courseId", getCourse);
router.put("/course/:courseId/:userId", isSignedIn, isAuthenticated,isTeacher, editCourse);
router.delete("/course/:courseId/:userId", isSignedIn, isAuthenticated,isTeacher, deleteCourse);

router.get("/course/thumbnail/:courseId", getThumbnail);

module.exports = router;
