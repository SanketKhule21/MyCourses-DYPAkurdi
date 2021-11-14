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

router.param("enrollmentId", getEnrollmnetById);

// router.post("/enrollment/create/:userId",enroll)
router.post("/enrollment/create", enroll); // Temp (Without userId)
// router.get("/enrollment/status/:userId",getStatus)
router.get("/enrollment/status/:enrollmentId", getStatus); // Temp (Without userId)

// router.put("/enrollment/:enrollmentId/status/:userId",getCertificate)
//router.get("/enrollment/:enrollmentId/certificate",getCertificate)// Temp (Without userId) make it as put
router.put("/enrollment/:enrollmentId/certificate", getCertificate); // temp to check update query

router.get("/enrollment/list/:userId", getEnrollmnetList);

router.param("enrollmentId PARAM", exitFromCourse);

module.exports = router;
