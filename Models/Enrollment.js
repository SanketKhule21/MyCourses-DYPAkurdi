const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid/v1");

const enrollmentSchema = mongoose.Schema({
          
    duration:{
        type:String,
        maxlength:10,
        required:true,
       
    },
    grade:{
        type:String,
        maxlength:10,
        required:true,
       
    },
},{
    timestamp:true
});

module.exports = mongoose.model("Enrollment",enrollmentSchema);