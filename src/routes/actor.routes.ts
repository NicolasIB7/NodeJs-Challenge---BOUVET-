import { Router } from "express";
import { requireToken } from "../middlewares/requireToken.middleware";
import { actor } from "../controllers/actor.controller";

const router = Router();

router.post("/actor", requireToken, actor);

export { router as actorRouter };
