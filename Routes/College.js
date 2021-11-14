var express = require("express");
const {
  read,
  getCollegeById,
  deleteCollege,
  createCollege,
  updateCollege,
} = require("../Controller/College");
var router = express.Router();

router.param("collegeId", getCollegeById);

router.post("/college", createCollege);
router.get("/college/:collegeId", read);
router.delete("/college/:collegeId", deleteCollege);
router.put("/college/:collegeId", updateCollege);
//Get All Colleges
//router.get("/college/collegeList",)
module.exports = router;
