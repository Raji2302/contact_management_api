import express from "express";
import Contact from "../models/contactModel.js";

const router = express.Router();


// CREATE CONTACT
router.post("/", async (req,res)=>{

const contact = await Contact.create({

name:req.body.name,
email:req.body.email,
phone:req.body.phone

});

res.json(contact);

});


// GET CONTACTS
router.get("/", async (req,res)=>{

const contacts = await Contact.find();

res.json(contacts);

});


// UPDATE CONTACT
router.put("/:id", async (req,res)=>{

const contact = await Contact.findByIdAndUpdate(

req.params.id,
req.body,
{new:true}

);

res.json(contact);

});


// DELETE CONTACT
router.delete("/:id", async (req,res)=>{

await Contact.findByIdAndDelete(req.params.id);

res.json({message:"Contact deleted"});

});


// SEARCH CONTACT
router.get("/search/:name", async (req,res)=>{

const contacts = await Contact.find({

name:{$regex:req.params.name,$options:"i"}

});

res.json(contacts);

});


export default router;