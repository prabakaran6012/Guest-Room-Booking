import express from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
  updateRoom
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE Room Using this route
router.post("/create", verifyAdmin, createRoom);
//UPDATE Room
router.put("/update", verifyAdmin, updateRoom);
//DELETE Room
router.put("/delete", verifyAdmin, deleteRoom);
//GET ALL
router.post("/all",verifyAdmin,getRooms); // for admin end
router.post("/user/all",getRooms); // for user end

export default router;
