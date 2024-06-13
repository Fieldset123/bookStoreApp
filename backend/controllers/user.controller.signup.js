//import the model
const User=require('../models/User.js')
const bcrypt = require('bcrypt'); 

//controller for signup
const signup=async(req,res)=>{
    try{
        //retrieve data from body of request
    const {fullname,email,password}=req.body;
    const user=await User.findOne({email:email});
    if(user){
        return res.status(400).json({message:"User already exists"})
    }
    
    const hashPassword=await bcrypt.hash(password,10);
    //agr user ni hai data base me to user ko database me store krwaenge
    const createdUser=new User({
        fullname:fullname,
        email:email,
        password:hashPassword
    })
    const response=await createdUser.save();
    console.log('response saved');
    res.status(200).json({message: "User created successfully", user:{
        _id:createdUser._id,
        fullname:createdUser.fullname,
        email:createdUser.email,
    }});
    }
    catch(error){
        console.log("Error: ", error);
        res.status(500).json({message:"Internal server error"});
    }
}

module.exports=signup;