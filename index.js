//Imports
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;


//Middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

//DB Connection
mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connected !");
}).catch((err)=>{
    console.log("Something went wrong!");
    console.log(err);
})

app.listen(port,()=>{
    console.log(`App is listning on ${port}`);
})