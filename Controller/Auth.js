const userSchema = require("../Models/User");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
exports.signup = (req, res) => {
  console.log("Route Opened");
  console.log(req.body);
  var user = new userSchema(req.body);
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.send({ error: error.array()[0] });
    return;
  }
  user.save((err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log("User Registred");
      res.status(200).send({ success: "User Registred" });
    }
  });
};
exports.signin = (req, res) => {
  console.log(req.body);
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.send({ error: error.array()[0] });
    return;
  }
  const { email, password } = req.body;
  userSchema.findOne({ email }, (err, user) => {
    if (err || !user) {
      res.status(400).json({ error: "user not found" });
      return;
    }
    if (!user.authenticate(password)) {
      res.status(404).json({ error: "Wrong Password" });
      return;
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
    res.cookie("token", token, {
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
    });
    res
      .status(200)
      .json({
        token,
        user: {
          id: user._id,
          name: user.name,
          role: user.role,
          email: user.email,
          phone: user.phone,
        },
      });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User Signed Out Successfully",
  });
};

//Protected Routes
exports.isSignedIn = expressJwt({
  secret: process.env.JWT_KEY,
  userProperty: "auth",
});

//Custome Middleware
exports.isAuthenticated = (req, res, next) => {
  console.log(req.profile);
  console.log(req.auth);
  if (req.profile && req.auth && req.profile._id == req.auth.id) {
    next();
  } else {
    res.status(403).json({ error: "ACCESS DENIED Auth" });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role == "Admin") {
    next();
  } else {
    res.status(403).json({ error: "ACCESS DENIED Admin" });
  }
};

exports.isRegulator = (req, res, next) => {
  //TODO:Change it
  if (req.profile.role == "Regulator") {
    next();
  } else {
    //TODO:Change it
    res.status(403).json({ error: "ACCESS DENIED Regulator" });
  }
};

exports.isTeacher = (req, res, next) => {
  if (req.profile.role == "Teacher" || req.profile.role == "Admin") {
    next();
  } else {
    res.status(403).json({ error: "ACCESS DENIED Teacher" });
  }
};

exports.isTA = (req, res, next) => {
  if (req.profile.role == "TA") {
    next();
  } else {
    res.status(403).json({ error: "ACCESS DENIED" });
  }
};
