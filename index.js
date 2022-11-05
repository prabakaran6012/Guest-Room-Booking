import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express(); // creating app
dotenv.config();  
// db connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())
app.use(cookieParser()) 
app.use(express.json());
// authentication route
app.use("/api/auth",authRoute);


app.listen(process.env.PORT||8800, () => {
  connect();
  console.log("Connected to backend.");
});
