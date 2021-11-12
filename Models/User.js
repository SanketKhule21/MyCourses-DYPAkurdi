const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid/v1");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:30,
        required:true,
    },
    email:{
        type:String,
        maxlength:30,
        required:true,
        unique:true
    },
    role:{
        type:String,
        maxlength:30,
        required:true,
    },
    about:{
        type:String,
        maxlength:90,
        default:"Tell me something about yourself!"
    }
    ,
    phone:{
        type:String,
        maxlength:30,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        maxlength:30,
        required:true,
    },
    Salt:String
    ,
    encryPassword:{
        type:String,
        maxlength:18,
        required:true,
    },
    dob:{
        type:String,
    },
    department:{
        type:String,
        default:"MCA"
    },
    address:{
        type:String,
        maxlength:30
    },
    enrollmentList:{
        type:Array,
        default:[]
    }
},{
    timestamp:true
});

userSchema.virtual("password").set(function (password){
    this._password = password;
    this.salt = uuid();
    this.encryPassword = this.securePassword(password)
}).get(function (){
    return this._password;
})

userSchema.methods = {
    securePassword:function(plainPassword){
        if(!plainPassword) return "";
        try{
            return crypto.createHmac("sha256",this.salt).update(plainPassword).digest("hex")
        }catch(error){
            return "";
        }
    }
}
module.exports = mongoose.model("User",userSchema);