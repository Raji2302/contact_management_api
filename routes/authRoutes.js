import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

const router = express.Router();


// REGISTER
router.post("/register", async (req,res)=>{

const {name,email,password} = req.body;

const hashed = await bcrypt.hash(password,10);

const user = await User.create({

name,
email,
password:hashed

});

res.json(user);

});


// LOGIN
router.post("/login", async (req,res)=>{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){
return res.json({message:"User not found"});
}

const match = await bcrypt.compare(password,user.password);

if(!match){
return res.json({message:"Invalid password"});
}

res.json({
message:"Login successful",
user
});

});

export default router;