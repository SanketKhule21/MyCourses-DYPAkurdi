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
  forgotPassword,
} = require("../Controller/User");

router.param("userId", getUserById);



router.get("/user/:userId", isSignedIn, isAuthenticated, read);
router.delete("/user/:userId", deleteUserById);
router.post("/user/:userId/forgotPassword", forgotPassword);
router.put("/user/:userId", isSignedIn, isAuthenticated, update);
router.get("/user/userList", isSignedIn, isAuthenticated, userEnrollmentList);

//it will come from course control
router.post("/user/:userId/:courseId", pushCourseInEnrollmentList);
module.exports = router;
