const categorySchema = require("../Models/Category");

exports.getCategoryById = (req, res, next, id) => {
  categorySchema.findById(id).exec((err, category) => {
    if (err) {
      res.status(401).json({ error: "category not found" });
      return;
    }
    req.category = category;
    next();
  });
};

exports.createCategory = (req, res) => {
  console.log(req.body);
  var category = new categorySchema(req.body);
  category.save((err, category) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Category created");
      res.status(200).send({ success: "Category created successfully" });
    }
  });
};

exports.updateCategory = () => {
  categorySchema.findByIdAndUpdate(
    { _id: req.category._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, category) => {
      if (err) {
        res.status(400).json({ error: "Category Not Found" });
        return;
      }
     
      res.status(200).json({ category: category });
    }
  );
};
exports.deleteCategory = (req, res) => {
  categorySchema.deleteOne({ _id: req.profile._id }).exec((err, category) => {
    if (err) {
      res.status(401).json({ error: "Could not find category" });
      return;
    }
    res.status(200).json({ msg: "Category Deleted Successfully" });
  });
};

exports.displayCategory = (req, res) => {
  res.status(200).send({ name: req.category.name });
};
