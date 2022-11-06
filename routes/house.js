import express from "express";
import {
  countByCity,
  createHouse,
  deleteHouse,
  getHouse,
  getHouseRooms,
  getHouses,
  updateHouse,
} from "../controllers/house.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHouse);

//UPDATE
router.put("/:id", verifyAdmin, updateHouse);
//DELETE
router.delete("/:id", verifyAdmin, deleteHouse);
//GET

router.get("/find/:id", getHouse);
//GET ALL

router.get("/", getHouses);
router.get("/countByCity", countByCity);
router.get("/room/:id", getHouseRooms);

export default router;
