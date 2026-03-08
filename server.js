import "dotenv/config";
import express from "express";
import cors from "cors";

import {connectDB} from "./db.js";

import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/",(req,res)=>{

res.send("Backend Running");

});

app.use("/api/auth",authRoutes);
app.use("/api/contacts",contactRoutes);
app.use('/uploads', express.static('uploads'));
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{

console.log(`Server running http://localhost:${PORT}`);

});