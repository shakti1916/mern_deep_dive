import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/",(req,res)=>{
    res.send("welcome to my app 2023");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE} at port: ${PORT}`.bgCyan.white)
})