var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { read,deleteUserById,update,userEnrollmentList,pushCourseInEnrollmentList } = require("../Controller/User");

router.get("/user/:userId",read)
router.delete("/user/:userId",deleteUserById)
router.put("/user/:userId",update)
router.get("/user/userList",userEnrollmentList)
router.post("/user/:userId/:courseId",pushCourseInEnrollmentList)