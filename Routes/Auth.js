var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { signup, signin, signout } = require("../Controller/Auth");
const { route } = require("./Course");

router.post(
  "/signup",
  [
    check("name", "Name should be atleast 3 chars").isLength({
      min: 3,
      max: 30,
    }),
    check("email", "Email should be atleast  chars").isEmail({ min: 3 }),
    check("password", "Password should be atleast 8 chars").isLength({
      min: 8,
    }),
    check("phone", "Name should be atmost 10 digits").isLength({ max: 10 }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "Email should be atleast  chars").isEmail({ min: 3 }),
    check("password", "Password should be atleast 8 chars").isLength({
      min: 8,
    }),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
