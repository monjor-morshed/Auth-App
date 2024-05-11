import express from "express";
import { userController } from "../controllers/userController.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", userController);

router.post("/update/:id", verifyUser, updateUser);

export default router;
