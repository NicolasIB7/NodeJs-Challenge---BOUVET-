import { Router, Request, Response } from "express";
import { requireToken } from "../middlewares/requireToken.middleware";
import { tvShows } from "../controllers/tvShow.controller";

const router = Router();

router.get("/tvshow/:id", requireToken, tvShows);

export { router as tvShowRouter };
