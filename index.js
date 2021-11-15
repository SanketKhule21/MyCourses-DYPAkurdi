//Imports
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors")({ origin: true });
const port = process.env.PORT || 5000;
const router = require("./Routes/Auth");
const userRoutes = require("./Routes/User");
const courseRoutes = require("./Routes/Course");
const collegeRoutes = require("./Routes/College");
const categoryRoutes = require("./Routes/Category");
const enrollRoutes = require("./Routes/Enrollment")
//Middlewares

app.use(cors);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(router);
app.use(userRoutes);
app.use(courseRoutes);
app.use(collegeRoutes);
app.use(categoryRoutes);
app.use(enrollRoutes);
//DB Connection
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected !");
  })
  .catch((err) => {
    console.log("Something went wrong!");
    console.log(err);
  });

app.listen(port, () => {
  console.log(`App is listning on ${port}`);
});
