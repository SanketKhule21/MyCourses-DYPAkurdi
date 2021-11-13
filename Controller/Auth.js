const userSchema = require("../Models/User")
const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken")
const expressJwt = require("express-jwt")
exports.signup = (req,res)=>{
    console.log("Route Opened");
    console.log(req.body);
    var user = new userSchema(req.body);
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.send({error:error.array()[0]})
    }
    user.save((err,user)=>{
        if(err){
            console.log(err);
        }else{
            console.log("User Registred");
            res.status(200).send({success:"User Registred"})
        }
    })
}
exports.signin = (req,res)=>{
    console.log(req.body);
    const {email,password} = req.body;
    userSchema.findOne({email},(err,user)=>{
        if(err || !user){
            res.status(400).json({error:"user not found"})
            return;
        }
        if(!user.authenticate(password)){
            res.status(404).json({error:"Wrong Password"})
            return;
        }
        const token = jwt.sign({id:user._id},process.env.JWT_KEY);
        res.cookie("token",token,{ expires: new Date(Date.now() + 900000), httpOnly: true })
        res.status(200).json({token,user:{id:user._id,name:user.name,role:user.role,email:user.email,phone:user.phone}});
    })
}