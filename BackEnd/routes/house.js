import express from "express";
import {
  createHouse,
  deleteHouse,
  getAllHouses,
  getHouse,
  getHouses,
  updateHouse,
} from "../controllers/house.js";
import {verifyAdmin, verifyToken} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE New House using this route
router.post("/", verifyAdmin, createHouse);
//UPDATE House Using This Route
router.put("/update", verifyAdmin, updateHouse);
//DELETE House By House Document Id
router.put("/delete", verifyAdmin, deleteHouse);
//GET All Houses For the Userend
router.get("/user/all",getAllHouses)
// Axios Not allowing get request with json body so i did with post request
// acessing specific House
router.post("/find",verifyToken, getHouse);
//GET ALL House Assoiciate with specific Admin
router.post("/all",verifyAdmin,getHouses);


export default router;
