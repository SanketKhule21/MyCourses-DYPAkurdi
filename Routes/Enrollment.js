var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { route } = require("./Auth");
const {
  enroll,
  getStatus,
  getCertificate,
  getEnrollmnetList,
  exitFromCourse,
  getEnrollmnetById,
} = require("../Controller/Enrollment");
const { isSignedIn,isAuthenticated } = require("../Controller/Auth");
const { getUserById } = require("../Controller/User");



router.param("enrollmentId", getEnrollmnetById);
router.param("userId", getUserById);

router.post("/enrollment/:userId", isSignedIn, isAuthenticated, enroll);
router.get("/enrollment/status/:enrollmentId/:userId", isSignedIn, isAuthenticated, getStatus); 
router.put("/enrollment/certificate/:enrollmentId/:userId", isSignedIn, isAuthenticated, getCertificate);
router.get("/enrollment/list/:userId", isSignedIn, isAuthenticated, getEnrollmnetList);
router.delete("/enrollment/:enrollmentId/:userId", isSignedIn, isAuthenticated, exitFromCourse);

module.exports = router;
