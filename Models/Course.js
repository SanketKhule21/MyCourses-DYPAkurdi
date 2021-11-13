const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid/v1");

const courseSchema = mongoose.Schema({
    C_Title:{
        type:String,
        maxlength:30,
        required:true,
    },
     C_Instructor:{
        type:String,
        maxlength:30,
        required:true,
    },
    
     C_Description:{
        type:String,
        maxlength:90,
        required:true,
        
    },
    
     C_Category:{
        type:ObjectId,
        maxlength:30,
        required:true,
    }

    ,
     C_Duration:{
        type:String,
        maxlength:30,
        required:true,
    }
    ,
     C_Thumbnail:{
        type:String,
        maxlength:30,
        required:true,
    }

    ,
     C_Rating:{
        type:String,
        maxlength:30,
        required:true,
    }
},
{
    timestamp:true
});

module.exports = mongoose.model("Course",courseSchema);