var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { isSignedIn, isAuthenticated } = require("../Controller/Auth");
const {
  update,
  userEnrollmentList,
  pushCourseInEnrollmentList,
  getUserById,
  read,
  deleteUserById,
} = require("../Controller/User");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, read);
router.delete("/user/:userId", deleteUserById);
router.put("/user/:userId", update);
router.get("/user/userList", userEnrollmentList);
//it will come from course control
router.post("/user/:userId/:courseId", pushCourseInEnrollmentList);
module.exports = router;
