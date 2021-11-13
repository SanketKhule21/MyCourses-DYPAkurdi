var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { createCategory } = require("../Controller/Category");

router.post("/category/create/:userId",createCategory);