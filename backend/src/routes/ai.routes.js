import { getReview } from "../controllers/ai.controllers.js";

import { Router } from "express";

const router = Router();

router.post("/get-review", getReview);

export default router;
