var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const {
  updateCategory,
  read,
  deleteCategory,
  displayCategory,
  createCategory,
  getCategoryById,
} = require("../Controller/Category");

router.param("categoryId", getCategoryById);

router.put("/category/:categoryId", updateCategory);
router.delete("/category/:categoryId", deleteCategory);
router.get("/category/:categoryId", displayCategory);
//router.post("/category/categoryList", getCategoryList)
router.post("/category", createCategory);

module.exports = router;
