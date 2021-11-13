var express = require("express");
var router = express.Router();
const { check } = require("express-validator")
const { getStatus } = require("../Controller/Enrollment");
const { route } = require("./Auth");

router.get("/enrollment/status/:userId",getStatus)


module.exports = route;