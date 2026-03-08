import mongoose from "mongoose";

const contactSchema = mongoose.Schema({

name:String,
email:String,
phone:String

});

export default mongoose.model("Contact",contactSchema);