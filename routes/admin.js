import express from "express";
import {
  updateUser,
  deleteUser,
  getUser
} from "../controllers/user.js";
import {getUsers} from "../controllers/admin.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyAdmin, updateUser);

//DELETE
router.delete("/:id", verifyAdmin, deleteUser);

//GET
router.get("/:id", verifyAdmin, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
