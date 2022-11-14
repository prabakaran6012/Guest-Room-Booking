import express from "express";
import {
    createBooking,
    deleteBooking,
    getUserBookings,
    getAdminBookings,
    getBookingsByRoomId,
    getBookings,
    getUserBookingsById
} from "../controllers/booking.js";
import {verifyAdmin, verifyToken} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE Booking 
router.post("/", verifyToken, createBooking);

//DELETE
router.put("/delete", verifyToken, deleteBooking);
// Get individual users bookings
router.post("/user/bookings", verifyToken, getUserBookings);
// Bookings By the booking Document Id userend
router.post("/bookingbyid",verifyToken,getUserBookingsById)
// Get Admin bookings It response the specific Booking By specific Admin
router.post("/admin/bookings", verifyAdmin, getAdminBookings);
// Get Bookings By the Room vise
router.post("/find", verifyToken, getBookingsByRoomId);
// Get all Bookings 
router.get("/all",getBookings)
export default router;
