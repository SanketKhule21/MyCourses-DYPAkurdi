const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid/v1");

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:30,
        unique:true,
        required:true,
    }
},{
    timestamp:true
});

module.exports = mongoose.model("Category",categorySchema);