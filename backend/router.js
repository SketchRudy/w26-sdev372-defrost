import { Router } from "express";
import { createUser } from "./controller.js";

const router = Router();

router.post("/", createUser);

export default router;
