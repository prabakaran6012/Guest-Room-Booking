import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)   // register using this route
router.post("/login", login)         // login using this route

router.get('/',(req,res)=>{
    res.send('hello cap!')
})

export default router