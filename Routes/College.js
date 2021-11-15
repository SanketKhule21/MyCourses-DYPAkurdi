var express = require("express");
const { isSignedIn, isAuthenticated, isRegulator } = require("../Controller/Auth");
const {
  read,
  getCollegeById,
  deleteCollege,
  createCollege,
  updateCollege,
} = require("../Controller/College");
const { getUserById } = require("../Controller/User");
var router = express.Router();

router.param("collegeId", getCollegeById);
router.param("userId", getUserById);

router.post("/college/:userId",isSignedIn,isAuthenticated,isRegulator, createCollege);
router.get("/college/:collegeId", read);
router.delete("/college/:collegeId/:userId",isSignedIn,isAuthenticated,isRegulator, deleteCollege);
router.put("/college/:collegeId/:userId",isSignedIn,isAuthenticated,isRegulator, updateCollege);
module.exports = router;
