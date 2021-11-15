var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { isSignedIn, isAuthenticated, isAdmin, isTeacher } = require("../Controller/Auth");
const {
  updateCategory,
  read,
  deleteCategory,
  displayCategory,
  createCategory,
  getCategoryById,
} = require("../Controller/Category");
const { getUserById } = require("../Controller/User");

router.param("categoryId", getCategoryById);
router.param("userId",getUserById);

router.put("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isTeacher, updateCategory);
router.delete("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isTeacher, deleteCategory);
router.get("/category/:categoryId", displayCategory);
router.post("/category/:userId",isSignedIn,isAuthenticated,isTeacher, createCategory);

module.exports = router;
