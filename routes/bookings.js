import express from "express";
import {
    createBooking,
    updateBooking,
    deleteBooking
} from "../controllers/booking.js";
import {verifyToken} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE Booking
router.post("/", verifyToken, createBooking);
//UPDATE 
router.put("/:id", verifyToken, updateBooking);
//DELETE
router.delete("/:id", verifyToken, deleteBooking);


export default router;
