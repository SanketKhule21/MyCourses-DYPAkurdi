const userSchema = require("../Models/User");

//Middleware
//TODO:while geting data only by ID
exports.getUserById = (req, res, next, id) => {
  userSchema.findById(id).exec((err, user) => {
    if (err) {
      res.status(401).json({ error: "User Not Found" });
      return;
    }
    req.profile = user;
    next();
  });
};

exports.read = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encryPassword = undefined;
  res.json(req.profile);
};

exports.deleteUserById = (req, res) => {
  userSchema.deleteOne({ _id: req.profile._id }).exec((err, user) => {
    if (err) {
      res.status(401).json({ error: "User Not Found" });
      return;
    }
    res.status(200).json({ msg: "User Removed Successfully" });
  });
};

exports.update = (req, res) => {
  userSchema.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        res.status(400).json({ error: "User Not Found" });
        return;
      }
      user.salt = undefined;
      user.encryPassword = undefined;
      res.status(200).json({ user: user });
    }
  );
};

exports.userEnrollmentList = () => {
  console.log("userEnrollmentList");
};

exports.pushCourseInEnrollmentList = () => {
  console.log("pushCourseInEnrollmentList");
};

exports.forgotPassword = (req, res) => {
  const { oldPassword, newPassword } = req.body;
  userSchema.findOne({ _id: req.profile._id }, (err, user) => {
    if (!user.authenticate(oldPassword)) {
      res.status(404).json({ error: "Wrong Password" });
      return;
    } else {
      var encryPass = crypto
        .createHmac("sha256", req.profile.salt)
        .update(newPassword)
        .digest("hex");
      userSchema.findByIdAndUpdate(
        { _id: req.profile._id },
        { $set: { encryPassword: encryPass } },
        { new: true, useFindAndModify: false },
        (err, user) => {
          if (err) {
            res.status(400).json({ error: "User Not Found" });
            return;
          }
          res.status(200).json({ success: "Password changed successfully !" });
        }
      );
    }
  });
};
